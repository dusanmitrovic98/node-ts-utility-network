import { networkInterfaces } from 'os';

function getIPv4Address(): string | undefined {
  const interfaces = networkInterfaces();

  for (const interfaceName of Object.keys(interfaces)) {
    const addresses = interfaces[interfaceName];
    if (addresses) {
      for (const address of addresses) {
        if (address.family === 'IPv4' && !address.internal) { 
          return address.address;
        }
      }
    }
  }

  return undefined;
}

export const ipv4 = getIPv4Address();