// TODO: Create an interface for the Candidate objects returned by the API
// ? not the exact syntax of the json, check later
export default interface Candidate {
    readonly AvatarURL: string | null;
    readonly Login: string | null;
    readonly Location: string | null;
    readonly Email: string | null;
    readonly Company: string | null;
    readonly Bio: string | null;
}