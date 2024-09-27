import { Hono } from 'hono'
import axios from 'axios'
const app = new Hono()
app.get(`/stars/:owner/:repo`, async (c) => {
  const { owner, repo } = c.req.param()

  try {
    const response = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}`
    )
    const stars = response.data.stargazers_count
    return c.json({ stars })
  } catch (error) {
    return c.json({ error: 'Repository not found or other error' }, 404)
  }
})

app.get('/', (c) => {
  return c.text(
    '欢迎使用 GitHub 星标数查询 API！使用 /stars/:owner/:repo 获取星标数。'
  )
})

export default app
