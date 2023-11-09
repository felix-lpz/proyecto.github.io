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
export function ConvertToInt(input: string)
{
    try
    {
        return Number.parseInt(input.toLowerCase()).toString()
    }
    catch(e)
    {
        return 0;
    }
}
export function ConvertToDecimal(input: string)
{
    try
    {
        return Number.parseFloat(input.toLocaleLowerCase());
    }
    catch(e)
    {
        return 0;
    }
}