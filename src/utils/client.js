import axios from 'axios'
import { baseURL } from '@/config/api'

const client = axios.create({
  baseURL,
  timeout: 2000,
  headers: {
    'X-API-KEY': '056d7e73-ab08-4ad6-be82-c23d26f3b36d',
    'Content-Type': 'application/json',
  }
})

const get = client.get
const post = client.post
const put = client.put
const patch = client.patch
const del = client.delete

export { get, post, put, patch, del }