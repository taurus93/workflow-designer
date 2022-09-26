export interface UserNode {
  type?: NODE_TYPE; // Type của node, là node đơn hay là node nhiều nhánh
  rule?: Rule; // thông tin rule
  name?: string; // ten
  email?: string; // email
  userNode?: UserNode[]; // list nhanh con neu type la BRANCH,
  identityVerification?: IDENTITY_VERIFICATION;
}

export class Rule {
  type?: ROLE_TYPE; // rule co the la SIGNER hoặc APPROVER
  required?: boolean;
  editable?: boolean;
}

export enum NODE_TYPE {
  SINGLE,
  BRANCH
}

export enum ROLE_TYPE {
  SIGNER,
  APPROVER
}

export enum IDENTITY_VERIFICATION {
  NONE,
  PASS_WORD,
  KBA,
  WEB_IDENTITY
}
