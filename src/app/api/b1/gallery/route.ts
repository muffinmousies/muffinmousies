import type { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import getConfig from 'next/config';

export async function GET(req: NextApiRequest) {
  const { serverRuntimeConfig } = getConfig();

  const dirRelativeToPublicFolder = 'gallery';

  const dir = path.join(
    serverRuntimeConfig.PROJECT_ROOT,
    './public',
    dirRelativeToPublicFolder,
  );

  const filenames = fs.readdirSync(dir);

  const images = filenames.map((name) =>
    path.join('/', dirRelativeToPublicFolder, name),
  );
  return NextResponse.json(images, { status: 200 });
}
