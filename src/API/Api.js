import * as axios from "axios";


const instance = axios.create({
    baseURL: `http://localhost:3000/fighters`
});

export const FightersApi = {
     getFighters () {
        return instance.get();
    },

    deleteFighters (id) {
      return  instance.delete(`/${id}`)
    },

    addFighters (values) {
         debugger
        return instance.post('',values);
    },

    editFighter (values,id) {
        return instance.put(`/${id}`, values)
    }
};