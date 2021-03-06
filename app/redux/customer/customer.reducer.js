let customerDefaultState = {
    data: [],
    error: null,
    page: 0,
    limit: 10,
    isLoading: false,
    searchText: '',
    isFinish: false,
    orderBy: 'id',
}

const customerReducer = (state = customerDefaultState, action) => {
   switch (action.type) {
       case 'LOADING_CUSTOMER':
            return {
                ...state,
                isLoading: true
            }
       case 'RESET_CUSTOMER_DATA':
            return {
                ...state,
                data: [],
                page: 0,
                isLoading: false,
                isFinish: false
            }
       case 'LOAD_CUSTOMER_SUCCESSFULLY':
            if (action.page > 0 && action.data.length == 0) {
                return {
                    ...state,
                    isLoading: false,
                    isFinish: true
                }
            }
            let currentPage = ++action.page;
            let customerList = [...state.data, ...action.data]
            return {
                ...state,
                data: customerList,
                isLoading: false,
                page: currentPage,
                searchText: action.searchText
            }
       case 'LOAD_CUSTOMER_FAILURE':
            return {
                ...state,
                error: action.error,
                isLoading: false
            }
   }
   return state;
}

export default customerReducer;
