export function title(state = '' , action)
{
    switch(action.type)
    {
        case 'TITLE':
            return action.payload;

        case 'CLEAR_TITLE':
            return state = '';

        default: return state;
    }
}

export function description(state = '' , action)
{
    switch(action.type)
    {
        case 'DESCRIPTION':
            return action.payload;

        case 'CLEAR_DESCRIPTION':
            return state = '';
            
        default: return state;
    }
}

export function creator(state = '' , action)
{
    switch(action.type)
    {
        case 'CREATOR':
            return action.payload;

        case 'CLEAR_CREATOR':
            return state = '';
            
        default: return state;
    }
}

export function tags(state = '' , action)
{
    switch(action.type)
    {
        case 'TAGS':
            return action.payload;

        case 'CLEAR_TAGS':
            return state = '';
            
        default: return state;
    }
}

export function file(state = '' , action)
{
    switch(action.type)
    {
        case 'FILE':
            return action.payload;

        case 'CLEAR_FILE':
            return state = '';
            
        default: return state;
    }
}

export function id(state = '' , action)
{
    switch(action.type)
    {
        case 'ID':
            return action.payload;

        case 'CLEAR_ID':
            return state = '';
            
        default: return state;
    }
}