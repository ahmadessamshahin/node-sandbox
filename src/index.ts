import env from '@config/secrets'
import server from '@api/initializers'
import Logger from '@config/logger';
const port = env.PORT

server.listen(port, () => Logger.info(`App running on ${port}`));
