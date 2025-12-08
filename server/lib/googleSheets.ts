// Google Sheets integration using Service Account (local) or Replit Connectors (production)
import { google } from 'googleapis';
import path from 'path';

let connectionSettings: any;

// Service Account credentials for local development
const SERVICE_ACCOUNT_FILE = path.resolve(process.cwd(), 'watchup-468105-233e828e0209.json');

async function getGoogleSheetsClient() {
  // Check if running in Replit environment
  const isReplit = process.env.REPLIT_CONNECTORS_HOSTNAME && (process.env.REPL_IDENTITY || process.env.WEB_REPL_RENEWAL);

  if (isReplit) {
    // Use Replit Connectors OAuth
    return await getReplitClient();
  } else {
    // Use Service Account for local development
    return await getServiceAccountClient();
  }
}

async function getServiceAccountClient() {
  const auth = new google.auth.GoogleAuth({
    keyFile: SERVICE_ACCOUNT_FILE,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return google.sheets({ version: 'v4', auth });
}

async function getReplitClient() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials({
      access_token: connectionSettings.settings.access_token
    });
    return google.sheets({ version: 'v4', auth: oauth2Client });
  }

  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY
    ? 'repl ' + process.env.REPL_IDENTITY
    : process.env.WEB_REPL_RENEWAL
    ? 'depl ' + process.env.WEB_REPL_RENEWAL
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=google-sheet',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('Google Sheet not connected');
  }

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({
    access_token: accessToken
  });

  return google.sheets({ version: 'v4', auth: oauth2Client });
}

// Export for use in routes
export async function getUncachableGoogleSheetClient() {
  return await getGoogleSheetsClient();
}

// Spreadsheet ID extracted from the URL
const SPREADSHEET_ID = '1k-e1Ip6R7BbnWSRjlVDG9MhHRud_EN9oATWUy5bX7c4';

export async function appendQuoteToSheet(data: {
  contact: string;
  modelName: string;
  stampingYear: string;
  hasWarranty: string;
  notes: string;
}) {
  const sheets = await getUncachableGoogleSheetClient();
  
  // Check if header row exists
  const headerCheck = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: 'A1:F1',
  });

  // If no header row, add it first
  if (!headerCheck.data.values || headerCheck.data.values.length === 0) {
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'A1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [['접수일시', '연락처', '모델명', '스탬핑 연도', '보증서 유무', '특이사항']],
      },
    });
  }

  // Append the quote data
  const timestamp = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
  const warrantyText = data.hasWarranty === 'yes' ? '있음' : '없음';
  
  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: 'A2',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[timestamp, data.contact, data.modelName, data.stampingYear, warrantyText, data.notes || '']],
    },
  });

  return { success: true };
}
