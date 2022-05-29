import * as bcrypt from 'bcrypt';
import { User } from 'src/users/user.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class defaultData1653807549408 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const email = 'test@test.test';
    const password = await bcrypt.hash('test', 8);

    const defaultUser = new User();
    defaultUser.email = email;
    defaultUser.password = password;

    queryRunner.manager.save(defaultUser);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.manager.delete(User, { email: 'test@test.test' });
  }
}
