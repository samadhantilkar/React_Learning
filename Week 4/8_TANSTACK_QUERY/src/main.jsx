import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import App from './App'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import CreatePost from './Mutation/createPost'

const client=new QueryClient(); 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <QueryClientProvider client={client}>
      <App/>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider> */}


    <QueryClientProvider client={client}>
      <CreatePost/> 
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

  </StrictMode>,
)
