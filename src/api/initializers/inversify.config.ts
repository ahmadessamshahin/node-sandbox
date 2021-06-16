
import { UserRepository } from '@api/repository/Users';
import { UserService } from '@api/services/Users';
import { TYPES } from '@interfaces/inversifyTypes';
import { Container } from 'inversify';

const container = new Container();

/**
 * Repository container binder
 */

container.bind<UserRepository>(TYPES.UserRepository).to(UserRepository).inSingletonScope();

/**
 * Services container binder
 */

container.bind<UserService>(TYPES.UserService).to(UserService).inSingletonScope();

export default container;
