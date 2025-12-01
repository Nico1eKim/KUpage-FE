import { Auth, AUTH } from '../constants/authName';

export const teamMatchingAuthExtractor = (roles: string[]): string => {
  const adminKeywords = [
    AUTH.PRESIDENT,
    AUTH.VICE_PRESIDENT,
    AUTH.PART_LEAD,
    AUTH.ACCOUNTANT,
    AUTH.TUTOR,
  ];

  const isAdmin = roles.some((role) => {
    const parts = role.split(' ');
    const last = parts[parts.length - 1];
    return adminKeywords.includes(last as Auth);
  });

  if (isAdmin) return 'admin';

  const isPm = roles.some((role) => {
    const parts = role.split(' ');
    return parts.length === 3 && parts[1] === 'PM';
  });

  if (isPm) return 'pm';

  return 'general';
};

export const partExtractor = (roles: string[]): Set<string> => {
  const partSet = new Set<string>();

  const isWeb = roles.some((role) => {
    const roleSplit = role.split(' ');
    return roleSplit.includes('Web');
  });

  const isNative = roles.some((role) => {
    const roleSplit = role.split(' ');
    return roleSplit.includes('Android');
  });

  if (isWeb) {
    partSet.add('Web_App');
  }
  if (isNative) {
    partSet.add('Native_App');
  }

  return partSet;
};
