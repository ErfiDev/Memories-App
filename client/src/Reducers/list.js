function List(state = [] , action)
{
    switch(action.type)
    {
        case 'INIT_LIST':
            return action.payload;

        default: return state;
    }
}

export default List;