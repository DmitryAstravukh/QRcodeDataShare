import { GET_ALL_CONTACTS } from './actions-types';

const inicialState = {
  contacts: [
    {
      id: 1,
      name: 'Астраух Дмитрий',
      link: 'https://vk.com/id211699079'
    },
    {
      id: 2,
      name: 'Бурак Алексей',
      link: 'https://vk.com/id76666271'
    },
    {
      id: 3,
      name: 'Михалевич Максим',
      link: 'https://vk.com/i4el0vek'
    },
    {
      id: 4,
      name: 'Жуковский Евгений',
      link: 'https://vk.com/id51919496'
    },
    {
      id: 5,
      name: 'Соколов Алексей',
      link: 'https://vk.com/purple.penguin'
    }
  ]
};

const getAllContacts = (state) => {
  return state;
}

const reducer = (state = inicialState, action) => {
  switch(action.type){
    case GET_ALL_CONTACTS: 
      return getAllContacts(state);

    default: return state;
  }
}

export default reducer;