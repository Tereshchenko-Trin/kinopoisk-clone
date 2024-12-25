import axios from 'axios'
import { baseURL } from '@/config/api'

const client = axios.create({
  baseURL,
  timeout: 4000,
  headers: {
    // solnechnoe.zatmenie.16@gmail.com
    // 'X-API-KEY': '056d7e73-ab08-4ad6-be82-c23d26f3b36d',

    // tereshchenko.trin@gmail.com
    // 'X-API-KEY': '14a1f0c4-e57d-49ff-b6d6-645fb8e1d4b0',

    // teg1997.kate@gmail.com
    'X-API-KEY': '7780766b-d4f5-45b3-bcf8-f6844d448cf5',
    'Content-Type': 'application/json',
  }
})

const get = client.get
const post = client.post
const put = client.put
const patch = client.patch
const del = client.delete

export { get, post, put, patch, del }