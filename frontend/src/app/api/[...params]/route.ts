export const runtime = "edge"

export async function GET(request: Request) {
  // const url = request.url
  const url = new URL(request.url)
  const chainbaseApiPath = url.pathname.replace('/api', '')

  try {
    // 目标 URL
    const baseUrl = 'http://35.230.25.197:8080'
    const targetUrl =
      baseUrl + chainbaseApiPath + '?' + url.searchParams.toString()

    // 使用 fetch 请求目标 URL
    const response = await fetch(targetUrl, {
      headers: {
        accept: 'application/json',
      },
    })

    // 检查响应是否成功
    if (!response.ok) {
      return new Response('Error', {
        status: response.status,
      })
    }

    if (response.body) {
      // 将目标服务器的流式响应发送至客户端
      return new Response(response.body as any as ReadableStream)
    } else {
      return new Response('Error', {
        status: 500,
      })
    }
  } catch (error) {
    return new Response('Error', {
      status: 500,
    })
  }
}


export async function POST(request: Request) {
  // const url = request.url
  const url = new URL(request.url)
  const body = await request.text()

  const chainbaseApiPath = url.pathname.replace('/api', '')

  try {
    // 目标 URL
    url.searchParams.delete('params')
    const baseUrl = 'http://35.230.25.197:8080'
    const targetUrl =
      baseUrl + chainbaseApiPath 

    // 使用 fetch 请求目标 URL
    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        accept: 'application/json',
      },
      body: body,
    })
    console.log(response.ok, response.status)

    // 检查响应是否成功
    if (!response.ok) {
      return new Response('Error', {
        status: response.status,
      })
    }

    if (response.body) {
      // 将目标服务器的流式响应发送至客户端
      return new Response(response.body as any as ReadableStream)
    } else {
      return new Response('Error', {
        status: 500,
      })
    }
  } catch (error) {
    console.log(error)
    return new Response('Error', {
      status: 500,
    })
  }
}
