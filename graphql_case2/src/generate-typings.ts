import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: [join(process.cwd(), 'src/graphql/*.gql')],
  path: join(process.cwd(), 'src/graphql/graphql.ts'),
  outputAs: 'class',
});
