export async function analytics(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { analytics },
  } = ctx

  ctx.status = 200
  // ctx.body = 'OK Modified'
  ctx.body = await analytics.getLiveUsers()
  ctx.set('cache-control', 'no-cache')

  await next()
}
