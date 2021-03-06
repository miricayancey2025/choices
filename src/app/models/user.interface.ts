export interface User {
    userUID: string;
    firstName: string;
    lastName:string;
    email: string;
    emailVerified: boolean;

    userType: string;
    photoURL?: string;
    phoneNumber?: string;
    agentUID?:string;
    check?: boolean;
    groupUID?: string;

}