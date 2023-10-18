export function ConvertToBoolean(input: string)
{
    try
    {
        return JSON.parse(input.toLocaleLowerCase())
    }
    catch(e)
    {
        return false;
    }
}