// TODO: Create an interface for the Candidate objects returned by the API
// ? not the exact syntax of the json, check later
export default interface Candidate {
    readonly avatar_url: string | undefined;
    readonly login: string;
    readonly Name: string | null;
    readonly location: string | null;
    readonly email: string | null;
    readonly company: string | null;
    readonly bio: string | null;
}