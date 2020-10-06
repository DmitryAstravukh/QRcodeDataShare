import { GET_ALL_CONTACTS } from './actions-types';

const inicialState = {
  contacts: [
    {
      id: 1,
      name: 'Астраух Дмитрий',
      number: '+375291111111',
      link: 'https://vk.com/id211699079'
    },
    {
      id: 2,
      name: 'Бурак Алексей',
      number: '+375292222222',
      link: 'https://vk.com/id76666271'
    },
    {
      id: 3,
      name: 'Михалевич Максим',
      number: '+375293333333',
      link: 'https://vk.com/i4el0vek'
    },
    {
      id: 4,
      name: 'Жуковский Евгений',
      number: '+375294444444',
      link: 'https://vk.com/id51919496'
    },
    {
      id: 5,
      name: 'Соколов Алексей',
      number: '+375295555555',
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