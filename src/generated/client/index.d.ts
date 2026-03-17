
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model device_basic_info
 * 
 */
export type device_basic_info = $Result.DefaultSelection<Prisma.$device_basic_infoPayload>
/**
 * Model device_alarm_info
 * 
 */
export type device_alarm_info = $Result.DefaultSelection<Prisma.$device_alarm_infoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Device_basic_infos
 * const device_basic_infos = await prisma.device_basic_info.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Device_basic_infos
   * const device_basic_infos = await prisma.device_basic_info.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.device_basic_info`: Exposes CRUD operations for the **device_basic_info** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Device_basic_infos
    * const device_basic_infos = await prisma.device_basic_info.findMany()
    * ```
    */
  get device_basic_info(): Prisma.device_basic_infoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.device_alarm_info`: Exposes CRUD operations for the **device_alarm_info** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Device_alarm_infos
    * const device_alarm_infos = await prisma.device_alarm_info.findMany()
    * ```
    */
  get device_alarm_info(): Prisma.device_alarm_infoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    device_basic_info: 'device_basic_info',
    device_alarm_info: 'device_alarm_info'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "device_basic_info" | "device_alarm_info"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      device_basic_info: {
        payload: Prisma.$device_basic_infoPayload<ExtArgs>
        fields: Prisma.device_basic_infoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.device_basic_infoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_basic_infoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.device_basic_infoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_basic_infoPayload>
          }
          findFirst: {
            args: Prisma.device_basic_infoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_basic_infoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.device_basic_infoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_basic_infoPayload>
          }
          findMany: {
            args: Prisma.device_basic_infoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_basic_infoPayload>[]
          }
          create: {
            args: Prisma.device_basic_infoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_basic_infoPayload>
          }
          createMany: {
            args: Prisma.device_basic_infoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.device_basic_infoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_basic_infoPayload>[]
          }
          delete: {
            args: Prisma.device_basic_infoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_basic_infoPayload>
          }
          update: {
            args: Prisma.device_basic_infoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_basic_infoPayload>
          }
          deleteMany: {
            args: Prisma.device_basic_infoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.device_basic_infoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.device_basic_infoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_basic_infoPayload>[]
          }
          upsert: {
            args: Prisma.device_basic_infoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_basic_infoPayload>
          }
          aggregate: {
            args: Prisma.Device_basic_infoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice_basic_info>
          }
          groupBy: {
            args: Prisma.device_basic_infoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Device_basic_infoGroupByOutputType>[]
          }
          count: {
            args: Prisma.device_basic_infoCountArgs<ExtArgs>
            result: $Utils.Optional<Device_basic_infoCountAggregateOutputType> | number
          }
        }
      }
      device_alarm_info: {
        payload: Prisma.$device_alarm_infoPayload<ExtArgs>
        fields: Prisma.device_alarm_infoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.device_alarm_infoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_alarm_infoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.device_alarm_infoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_alarm_infoPayload>
          }
          findFirst: {
            args: Prisma.device_alarm_infoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_alarm_infoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.device_alarm_infoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_alarm_infoPayload>
          }
          findMany: {
            args: Prisma.device_alarm_infoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_alarm_infoPayload>[]
          }
          create: {
            args: Prisma.device_alarm_infoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_alarm_infoPayload>
          }
          createMany: {
            args: Prisma.device_alarm_infoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.device_alarm_infoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_alarm_infoPayload>[]
          }
          delete: {
            args: Prisma.device_alarm_infoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_alarm_infoPayload>
          }
          update: {
            args: Prisma.device_alarm_infoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_alarm_infoPayload>
          }
          deleteMany: {
            args: Prisma.device_alarm_infoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.device_alarm_infoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.device_alarm_infoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_alarm_infoPayload>[]
          }
          upsert: {
            args: Prisma.device_alarm_infoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_alarm_infoPayload>
          }
          aggregate: {
            args: Prisma.Device_alarm_infoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice_alarm_info>
          }
          groupBy: {
            args: Prisma.device_alarm_infoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Device_alarm_infoGroupByOutputType>[]
          }
          count: {
            args: Prisma.device_alarm_infoCountArgs<ExtArgs>
            result: $Utils.Optional<Device_alarm_infoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    device_basic_info?: device_basic_infoOmit
    device_alarm_info?: device_alarm_infoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Device_basic_infoCountOutputType
   */

  export type Device_basic_infoCountOutputType = {
    alarms: number
  }

  export type Device_basic_infoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alarms?: boolean | Device_basic_infoCountOutputTypeCountAlarmsArgs
  }

  // Custom InputTypes
  /**
   * Device_basic_infoCountOutputType without action
   */
  export type Device_basic_infoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device_basic_infoCountOutputType
     */
    select?: Device_basic_infoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Device_basic_infoCountOutputType without action
   */
  export type Device_basic_infoCountOutputTypeCountAlarmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: device_alarm_infoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model device_basic_info
   */

  export type AggregateDevice_basic_info = {
    _count: Device_basic_infoCountAggregateOutputType | null
    _avg: Device_basic_infoAvgAggregateOutputType | null
    _sum: Device_basic_infoSumAggregateOutputType | null
    _min: Device_basic_infoMinAggregateOutputType | null
    _max: Device_basic_infoMaxAggregateOutputType | null
  }

  export type Device_basic_infoAvgAggregateOutputType = {
    id: number | null
  }

  export type Device_basic_infoSumAggregateOutputType = {
    id: bigint | null
  }

  export type Device_basic_infoMinAggregateOutputType = {
    name: string | null
    id: bigint | null
  }

  export type Device_basic_infoMaxAggregateOutputType = {
    name: string | null
    id: bigint | null
  }

  export type Device_basic_infoCountAggregateOutputType = {
    name: number
    id: number
    _all: number
  }


  export type Device_basic_infoAvgAggregateInputType = {
    id?: true
  }

  export type Device_basic_infoSumAggregateInputType = {
    id?: true
  }

  export type Device_basic_infoMinAggregateInputType = {
    name?: true
    id?: true
  }

  export type Device_basic_infoMaxAggregateInputType = {
    name?: true
    id?: true
  }

  export type Device_basic_infoCountAggregateInputType = {
    name?: true
    id?: true
    _all?: true
  }

  export type Device_basic_infoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which device_basic_info to aggregate.
     */
    where?: device_basic_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of device_basic_infos to fetch.
     */
    orderBy?: device_basic_infoOrderByWithRelationInput | device_basic_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: device_basic_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` device_basic_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` device_basic_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned device_basic_infos
    **/
    _count?: true | Device_basic_infoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Device_basic_infoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Device_basic_infoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Device_basic_infoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Device_basic_infoMaxAggregateInputType
  }

  export type GetDevice_basic_infoAggregateType<T extends Device_basic_infoAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice_basic_info]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice_basic_info[P]>
      : GetScalarType<T[P], AggregateDevice_basic_info[P]>
  }




  export type device_basic_infoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: device_basic_infoWhereInput
    orderBy?: device_basic_infoOrderByWithAggregationInput | device_basic_infoOrderByWithAggregationInput[]
    by: Device_basic_infoScalarFieldEnum[] | Device_basic_infoScalarFieldEnum
    having?: device_basic_infoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Device_basic_infoCountAggregateInputType | true
    _avg?: Device_basic_infoAvgAggregateInputType
    _sum?: Device_basic_infoSumAggregateInputType
    _min?: Device_basic_infoMinAggregateInputType
    _max?: Device_basic_infoMaxAggregateInputType
  }

  export type Device_basic_infoGroupByOutputType = {
    name: string | null
    id: bigint
    _count: Device_basic_infoCountAggregateOutputType | null
    _avg: Device_basic_infoAvgAggregateOutputType | null
    _sum: Device_basic_infoSumAggregateOutputType | null
    _min: Device_basic_infoMinAggregateOutputType | null
    _max: Device_basic_infoMaxAggregateOutputType | null
  }

  type GetDevice_basic_infoGroupByPayload<T extends device_basic_infoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Device_basic_infoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Device_basic_infoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Device_basic_infoGroupByOutputType[P]>
            : GetScalarType<T[P], Device_basic_infoGroupByOutputType[P]>
        }
      >
    >


  export type device_basic_infoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    id?: boolean
    alarms?: boolean | device_basic_info$alarmsArgs<ExtArgs>
    _count?: boolean | Device_basic_infoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device_basic_info"]>

  export type device_basic_infoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    id?: boolean
  }, ExtArgs["result"]["device_basic_info"]>

  export type device_basic_infoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    id?: boolean
  }, ExtArgs["result"]["device_basic_info"]>

  export type device_basic_infoSelectScalar = {
    name?: boolean
    id?: boolean
  }

  export type device_basic_infoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "id", ExtArgs["result"]["device_basic_info"]>
  export type device_basic_infoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alarms?: boolean | device_basic_info$alarmsArgs<ExtArgs>
    _count?: boolean | Device_basic_infoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type device_basic_infoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type device_basic_infoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $device_basic_infoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "device_basic_info"
    objects: {
      alarms: Prisma.$device_alarm_infoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      name: string | null
      id: bigint
    }, ExtArgs["result"]["device_basic_info"]>
    composites: {}
  }

  type device_basic_infoGetPayload<S extends boolean | null | undefined | device_basic_infoDefaultArgs> = $Result.GetResult<Prisma.$device_basic_infoPayload, S>

  type device_basic_infoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<device_basic_infoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Device_basic_infoCountAggregateInputType | true
    }

  export interface device_basic_infoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['device_basic_info'], meta: { name: 'device_basic_info' } }
    /**
     * Find zero or one Device_basic_info that matches the filter.
     * @param {device_basic_infoFindUniqueArgs} args - Arguments to find a Device_basic_info
     * @example
     * // Get one Device_basic_info
     * const device_basic_info = await prisma.device_basic_info.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends device_basic_infoFindUniqueArgs>(args: SelectSubset<T, device_basic_infoFindUniqueArgs<ExtArgs>>): Prisma__device_basic_infoClient<$Result.GetResult<Prisma.$device_basic_infoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device_basic_info that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {device_basic_infoFindUniqueOrThrowArgs} args - Arguments to find a Device_basic_info
     * @example
     * // Get one Device_basic_info
     * const device_basic_info = await prisma.device_basic_info.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends device_basic_infoFindUniqueOrThrowArgs>(args: SelectSubset<T, device_basic_infoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__device_basic_infoClient<$Result.GetResult<Prisma.$device_basic_infoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device_basic_info that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {device_basic_infoFindFirstArgs} args - Arguments to find a Device_basic_info
     * @example
     * // Get one Device_basic_info
     * const device_basic_info = await prisma.device_basic_info.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends device_basic_infoFindFirstArgs>(args?: SelectSubset<T, device_basic_infoFindFirstArgs<ExtArgs>>): Prisma__device_basic_infoClient<$Result.GetResult<Prisma.$device_basic_infoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device_basic_info that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {device_basic_infoFindFirstOrThrowArgs} args - Arguments to find a Device_basic_info
     * @example
     * // Get one Device_basic_info
     * const device_basic_info = await prisma.device_basic_info.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends device_basic_infoFindFirstOrThrowArgs>(args?: SelectSubset<T, device_basic_infoFindFirstOrThrowArgs<ExtArgs>>): Prisma__device_basic_infoClient<$Result.GetResult<Prisma.$device_basic_infoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Device_basic_infos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {device_basic_infoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Device_basic_infos
     * const device_basic_infos = await prisma.device_basic_info.findMany()
     * 
     * // Get first 10 Device_basic_infos
     * const device_basic_infos = await prisma.device_basic_info.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const device_basic_infoWithNameOnly = await prisma.device_basic_info.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends device_basic_infoFindManyArgs>(args?: SelectSubset<T, device_basic_infoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$device_basic_infoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device_basic_info.
     * @param {device_basic_infoCreateArgs} args - Arguments to create a Device_basic_info.
     * @example
     * // Create one Device_basic_info
     * const Device_basic_info = await prisma.device_basic_info.create({
     *   data: {
     *     // ... data to create a Device_basic_info
     *   }
     * })
     * 
     */
    create<T extends device_basic_infoCreateArgs>(args: SelectSubset<T, device_basic_infoCreateArgs<ExtArgs>>): Prisma__device_basic_infoClient<$Result.GetResult<Prisma.$device_basic_infoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Device_basic_infos.
     * @param {device_basic_infoCreateManyArgs} args - Arguments to create many Device_basic_infos.
     * @example
     * // Create many Device_basic_infos
     * const device_basic_info = await prisma.device_basic_info.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends device_basic_infoCreateManyArgs>(args?: SelectSubset<T, device_basic_infoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Device_basic_infos and returns the data saved in the database.
     * @param {device_basic_infoCreateManyAndReturnArgs} args - Arguments to create many Device_basic_infos.
     * @example
     * // Create many Device_basic_infos
     * const device_basic_info = await prisma.device_basic_info.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Device_basic_infos and only return the `name`
     * const device_basic_infoWithNameOnly = await prisma.device_basic_info.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends device_basic_infoCreateManyAndReturnArgs>(args?: SelectSubset<T, device_basic_infoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$device_basic_infoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Device_basic_info.
     * @param {device_basic_infoDeleteArgs} args - Arguments to delete one Device_basic_info.
     * @example
     * // Delete one Device_basic_info
     * const Device_basic_info = await prisma.device_basic_info.delete({
     *   where: {
     *     // ... filter to delete one Device_basic_info
     *   }
     * })
     * 
     */
    delete<T extends device_basic_infoDeleteArgs>(args: SelectSubset<T, device_basic_infoDeleteArgs<ExtArgs>>): Prisma__device_basic_infoClient<$Result.GetResult<Prisma.$device_basic_infoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device_basic_info.
     * @param {device_basic_infoUpdateArgs} args - Arguments to update one Device_basic_info.
     * @example
     * // Update one Device_basic_info
     * const device_basic_info = await prisma.device_basic_info.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends device_basic_infoUpdateArgs>(args: SelectSubset<T, device_basic_infoUpdateArgs<ExtArgs>>): Prisma__device_basic_infoClient<$Result.GetResult<Prisma.$device_basic_infoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Device_basic_infos.
     * @param {device_basic_infoDeleteManyArgs} args - Arguments to filter Device_basic_infos to delete.
     * @example
     * // Delete a few Device_basic_infos
     * const { count } = await prisma.device_basic_info.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends device_basic_infoDeleteManyArgs>(args?: SelectSubset<T, device_basic_infoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Device_basic_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {device_basic_infoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Device_basic_infos
     * const device_basic_info = await prisma.device_basic_info.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends device_basic_infoUpdateManyArgs>(args: SelectSubset<T, device_basic_infoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Device_basic_infos and returns the data updated in the database.
     * @param {device_basic_infoUpdateManyAndReturnArgs} args - Arguments to update many Device_basic_infos.
     * @example
     * // Update many Device_basic_infos
     * const device_basic_info = await prisma.device_basic_info.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Device_basic_infos and only return the `name`
     * const device_basic_infoWithNameOnly = await prisma.device_basic_info.updateManyAndReturn({
     *   select: { name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends device_basic_infoUpdateManyAndReturnArgs>(args: SelectSubset<T, device_basic_infoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$device_basic_infoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Device_basic_info.
     * @param {device_basic_infoUpsertArgs} args - Arguments to update or create a Device_basic_info.
     * @example
     * // Update or create a Device_basic_info
     * const device_basic_info = await prisma.device_basic_info.upsert({
     *   create: {
     *     // ... data to create a Device_basic_info
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device_basic_info we want to update
     *   }
     * })
     */
    upsert<T extends device_basic_infoUpsertArgs>(args: SelectSubset<T, device_basic_infoUpsertArgs<ExtArgs>>): Prisma__device_basic_infoClient<$Result.GetResult<Prisma.$device_basic_infoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Device_basic_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {device_basic_infoCountArgs} args - Arguments to filter Device_basic_infos to count.
     * @example
     * // Count the number of Device_basic_infos
     * const count = await prisma.device_basic_info.count({
     *   where: {
     *     // ... the filter for the Device_basic_infos we want to count
     *   }
     * })
    **/
    count<T extends device_basic_infoCountArgs>(
      args?: Subset<T, device_basic_infoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Device_basic_infoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device_basic_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Device_basic_infoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Device_basic_infoAggregateArgs>(args: Subset<T, Device_basic_infoAggregateArgs>): Prisma.PrismaPromise<GetDevice_basic_infoAggregateType<T>>

    /**
     * Group by Device_basic_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {device_basic_infoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends device_basic_infoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: device_basic_infoGroupByArgs['orderBy'] }
        : { orderBy?: device_basic_infoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, device_basic_infoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDevice_basic_infoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the device_basic_info model
   */
  readonly fields: device_basic_infoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for device_basic_info.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__device_basic_infoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alarms<T extends device_basic_info$alarmsArgs<ExtArgs> = {}>(args?: Subset<T, device_basic_info$alarmsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$device_alarm_infoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the device_basic_info model
   */
  interface device_basic_infoFieldRefs {
    readonly name: FieldRef<"device_basic_info", 'String'>
    readonly id: FieldRef<"device_basic_info", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * device_basic_info findUnique
   */
  export type device_basic_infoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_basic_info
     */
    select?: device_basic_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_basic_info
     */
    omit?: device_basic_infoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_basic_infoInclude<ExtArgs> | null
    /**
     * Filter, which device_basic_info to fetch.
     */
    where: device_basic_infoWhereUniqueInput
  }

  /**
   * device_basic_info findUniqueOrThrow
   */
  export type device_basic_infoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_basic_info
     */
    select?: device_basic_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_basic_info
     */
    omit?: device_basic_infoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_basic_infoInclude<ExtArgs> | null
    /**
     * Filter, which device_basic_info to fetch.
     */
    where: device_basic_infoWhereUniqueInput
  }

  /**
   * device_basic_info findFirst
   */
  export type device_basic_infoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_basic_info
     */
    select?: device_basic_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_basic_info
     */
    omit?: device_basic_infoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_basic_infoInclude<ExtArgs> | null
    /**
     * Filter, which device_basic_info to fetch.
     */
    where?: device_basic_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of device_basic_infos to fetch.
     */
    orderBy?: device_basic_infoOrderByWithRelationInput | device_basic_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for device_basic_infos.
     */
    cursor?: device_basic_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` device_basic_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` device_basic_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of device_basic_infos.
     */
    distinct?: Device_basic_infoScalarFieldEnum | Device_basic_infoScalarFieldEnum[]
  }

  /**
   * device_basic_info findFirstOrThrow
   */
  export type device_basic_infoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_basic_info
     */
    select?: device_basic_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_basic_info
     */
    omit?: device_basic_infoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_basic_infoInclude<ExtArgs> | null
    /**
     * Filter, which device_basic_info to fetch.
     */
    where?: device_basic_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of device_basic_infos to fetch.
     */
    orderBy?: device_basic_infoOrderByWithRelationInput | device_basic_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for device_basic_infos.
     */
    cursor?: device_basic_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` device_basic_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` device_basic_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of device_basic_infos.
     */
    distinct?: Device_basic_infoScalarFieldEnum | Device_basic_infoScalarFieldEnum[]
  }

  /**
   * device_basic_info findMany
   */
  export type device_basic_infoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_basic_info
     */
    select?: device_basic_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_basic_info
     */
    omit?: device_basic_infoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_basic_infoInclude<ExtArgs> | null
    /**
     * Filter, which device_basic_infos to fetch.
     */
    where?: device_basic_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of device_basic_infos to fetch.
     */
    orderBy?: device_basic_infoOrderByWithRelationInput | device_basic_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing device_basic_infos.
     */
    cursor?: device_basic_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` device_basic_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` device_basic_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of device_basic_infos.
     */
    distinct?: Device_basic_infoScalarFieldEnum | Device_basic_infoScalarFieldEnum[]
  }

  /**
   * device_basic_info create
   */
  export type device_basic_infoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_basic_info
     */
    select?: device_basic_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_basic_info
     */
    omit?: device_basic_infoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_basic_infoInclude<ExtArgs> | null
    /**
     * The data needed to create a device_basic_info.
     */
    data?: XOR<device_basic_infoCreateInput, device_basic_infoUncheckedCreateInput>
  }

  /**
   * device_basic_info createMany
   */
  export type device_basic_infoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many device_basic_infos.
     */
    data: device_basic_infoCreateManyInput | device_basic_infoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * device_basic_info createManyAndReturn
   */
  export type device_basic_infoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_basic_info
     */
    select?: device_basic_infoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the device_basic_info
     */
    omit?: device_basic_infoOmit<ExtArgs> | null
    /**
     * The data used to create many device_basic_infos.
     */
    data: device_basic_infoCreateManyInput | device_basic_infoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * device_basic_info update
   */
  export type device_basic_infoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_basic_info
     */
    select?: device_basic_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_basic_info
     */
    omit?: device_basic_infoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_basic_infoInclude<ExtArgs> | null
    /**
     * The data needed to update a device_basic_info.
     */
    data: XOR<device_basic_infoUpdateInput, device_basic_infoUncheckedUpdateInput>
    /**
     * Choose, which device_basic_info to update.
     */
    where: device_basic_infoWhereUniqueInput
  }

  /**
   * device_basic_info updateMany
   */
  export type device_basic_infoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update device_basic_infos.
     */
    data: XOR<device_basic_infoUpdateManyMutationInput, device_basic_infoUncheckedUpdateManyInput>
    /**
     * Filter which device_basic_infos to update
     */
    where?: device_basic_infoWhereInput
    /**
     * Limit how many device_basic_infos to update.
     */
    limit?: number
  }

  /**
   * device_basic_info updateManyAndReturn
   */
  export type device_basic_infoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_basic_info
     */
    select?: device_basic_infoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the device_basic_info
     */
    omit?: device_basic_infoOmit<ExtArgs> | null
    /**
     * The data used to update device_basic_infos.
     */
    data: XOR<device_basic_infoUpdateManyMutationInput, device_basic_infoUncheckedUpdateManyInput>
    /**
     * Filter which device_basic_infos to update
     */
    where?: device_basic_infoWhereInput
    /**
     * Limit how many device_basic_infos to update.
     */
    limit?: number
  }

  /**
   * device_basic_info upsert
   */
  export type device_basic_infoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_basic_info
     */
    select?: device_basic_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_basic_info
     */
    omit?: device_basic_infoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_basic_infoInclude<ExtArgs> | null
    /**
     * The filter to search for the device_basic_info to update in case it exists.
     */
    where: device_basic_infoWhereUniqueInput
    /**
     * In case the device_basic_info found by the `where` argument doesn't exist, create a new device_basic_info with this data.
     */
    create: XOR<device_basic_infoCreateInput, device_basic_infoUncheckedCreateInput>
    /**
     * In case the device_basic_info was found with the provided `where` argument, update it with this data.
     */
    update: XOR<device_basic_infoUpdateInput, device_basic_infoUncheckedUpdateInput>
  }

  /**
   * device_basic_info delete
   */
  export type device_basic_infoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_basic_info
     */
    select?: device_basic_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_basic_info
     */
    omit?: device_basic_infoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_basic_infoInclude<ExtArgs> | null
    /**
     * Filter which device_basic_info to delete.
     */
    where: device_basic_infoWhereUniqueInput
  }

  /**
   * device_basic_info deleteMany
   */
  export type device_basic_infoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which device_basic_infos to delete
     */
    where?: device_basic_infoWhereInput
    /**
     * Limit how many device_basic_infos to delete.
     */
    limit?: number
  }

  /**
   * device_basic_info.alarms
   */
  export type device_basic_info$alarmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_alarm_info
     */
    select?: device_alarm_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_alarm_info
     */
    omit?: device_alarm_infoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_alarm_infoInclude<ExtArgs> | null
    where?: device_alarm_infoWhereInput
    orderBy?: device_alarm_infoOrderByWithRelationInput | device_alarm_infoOrderByWithRelationInput[]
    cursor?: device_alarm_infoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Device_alarm_infoScalarFieldEnum | Device_alarm_infoScalarFieldEnum[]
  }

  /**
   * device_basic_info without action
   */
  export type device_basic_infoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_basic_info
     */
    select?: device_basic_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_basic_info
     */
    omit?: device_basic_infoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_basic_infoInclude<ExtArgs> | null
  }


  /**
   * Model device_alarm_info
   */

  export type AggregateDevice_alarm_info = {
    _count: Device_alarm_infoCountAggregateOutputType | null
    _avg: Device_alarm_infoAvgAggregateOutputType | null
    _sum: Device_alarm_infoSumAggregateOutputType | null
    _min: Device_alarm_infoMinAggregateOutputType | null
    _max: Device_alarm_infoMaxAggregateOutputType | null
  }

  export type Device_alarm_infoAvgAggregateOutputType = {
    id: number | null
    device_id: number | null
  }

  export type Device_alarm_infoSumAggregateOutputType = {
    id: bigint | null
    device_id: bigint | null
  }

  export type Device_alarm_infoMinAggregateOutputType = {
    id: bigint | null
    device_id: bigint | null
    message: string | null
    occurred_at: Date | null
  }

  export type Device_alarm_infoMaxAggregateOutputType = {
    id: bigint | null
    device_id: bigint | null
    message: string | null
    occurred_at: Date | null
  }

  export type Device_alarm_infoCountAggregateOutputType = {
    id: number
    device_id: number
    message: number
    occurred_at: number
    _all: number
  }


  export type Device_alarm_infoAvgAggregateInputType = {
    id?: true
    device_id?: true
  }

  export type Device_alarm_infoSumAggregateInputType = {
    id?: true
    device_id?: true
  }

  export type Device_alarm_infoMinAggregateInputType = {
    id?: true
    device_id?: true
    message?: true
    occurred_at?: true
  }

  export type Device_alarm_infoMaxAggregateInputType = {
    id?: true
    device_id?: true
    message?: true
    occurred_at?: true
  }

  export type Device_alarm_infoCountAggregateInputType = {
    id?: true
    device_id?: true
    message?: true
    occurred_at?: true
    _all?: true
  }

  export type Device_alarm_infoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which device_alarm_info to aggregate.
     */
    where?: device_alarm_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of device_alarm_infos to fetch.
     */
    orderBy?: device_alarm_infoOrderByWithRelationInput | device_alarm_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: device_alarm_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` device_alarm_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` device_alarm_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned device_alarm_infos
    **/
    _count?: true | Device_alarm_infoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Device_alarm_infoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Device_alarm_infoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Device_alarm_infoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Device_alarm_infoMaxAggregateInputType
  }

  export type GetDevice_alarm_infoAggregateType<T extends Device_alarm_infoAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice_alarm_info]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice_alarm_info[P]>
      : GetScalarType<T[P], AggregateDevice_alarm_info[P]>
  }




  export type device_alarm_infoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: device_alarm_infoWhereInput
    orderBy?: device_alarm_infoOrderByWithAggregationInput | device_alarm_infoOrderByWithAggregationInput[]
    by: Device_alarm_infoScalarFieldEnum[] | Device_alarm_infoScalarFieldEnum
    having?: device_alarm_infoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Device_alarm_infoCountAggregateInputType | true
    _avg?: Device_alarm_infoAvgAggregateInputType
    _sum?: Device_alarm_infoSumAggregateInputType
    _min?: Device_alarm_infoMinAggregateInputType
    _max?: Device_alarm_infoMaxAggregateInputType
  }

  export type Device_alarm_infoGroupByOutputType = {
    id: bigint
    device_id: bigint
    message: string
    occurred_at: Date
    _count: Device_alarm_infoCountAggregateOutputType | null
    _avg: Device_alarm_infoAvgAggregateOutputType | null
    _sum: Device_alarm_infoSumAggregateOutputType | null
    _min: Device_alarm_infoMinAggregateOutputType | null
    _max: Device_alarm_infoMaxAggregateOutputType | null
  }

  type GetDevice_alarm_infoGroupByPayload<T extends device_alarm_infoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Device_alarm_infoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Device_alarm_infoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Device_alarm_infoGroupByOutputType[P]>
            : GetScalarType<T[P], Device_alarm_infoGroupByOutputType[P]>
        }
      >
    >


  export type device_alarm_infoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device_id?: boolean
    message?: boolean
    occurred_at?: boolean
    device?: boolean | device_basic_infoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device_alarm_info"]>

  export type device_alarm_infoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device_id?: boolean
    message?: boolean
    occurred_at?: boolean
    device?: boolean | device_basic_infoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device_alarm_info"]>

  export type device_alarm_infoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device_id?: boolean
    message?: boolean
    occurred_at?: boolean
    device?: boolean | device_basic_infoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device_alarm_info"]>

  export type device_alarm_infoSelectScalar = {
    id?: boolean
    device_id?: boolean
    message?: boolean
    occurred_at?: boolean
  }

  export type device_alarm_infoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "device_id" | "message" | "occurred_at", ExtArgs["result"]["device_alarm_info"]>
  export type device_alarm_infoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | device_basic_infoDefaultArgs<ExtArgs>
  }
  export type device_alarm_infoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | device_basic_infoDefaultArgs<ExtArgs>
  }
  export type device_alarm_infoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | device_basic_infoDefaultArgs<ExtArgs>
  }

  export type $device_alarm_infoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "device_alarm_info"
    objects: {
      device: Prisma.$device_basic_infoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      device_id: bigint
      message: string
      occurred_at: Date
    }, ExtArgs["result"]["device_alarm_info"]>
    composites: {}
  }

  type device_alarm_infoGetPayload<S extends boolean | null | undefined | device_alarm_infoDefaultArgs> = $Result.GetResult<Prisma.$device_alarm_infoPayload, S>

  type device_alarm_infoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<device_alarm_infoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Device_alarm_infoCountAggregateInputType | true
    }

  export interface device_alarm_infoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['device_alarm_info'], meta: { name: 'device_alarm_info' } }
    /**
     * Find zero or one Device_alarm_info that matches the filter.
     * @param {device_alarm_infoFindUniqueArgs} args - Arguments to find a Device_alarm_info
     * @example
     * // Get one Device_alarm_info
     * const device_alarm_info = await prisma.device_alarm_info.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends device_alarm_infoFindUniqueArgs>(args: SelectSubset<T, device_alarm_infoFindUniqueArgs<ExtArgs>>): Prisma__device_alarm_infoClient<$Result.GetResult<Prisma.$device_alarm_infoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device_alarm_info that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {device_alarm_infoFindUniqueOrThrowArgs} args - Arguments to find a Device_alarm_info
     * @example
     * // Get one Device_alarm_info
     * const device_alarm_info = await prisma.device_alarm_info.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends device_alarm_infoFindUniqueOrThrowArgs>(args: SelectSubset<T, device_alarm_infoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__device_alarm_infoClient<$Result.GetResult<Prisma.$device_alarm_infoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device_alarm_info that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {device_alarm_infoFindFirstArgs} args - Arguments to find a Device_alarm_info
     * @example
     * // Get one Device_alarm_info
     * const device_alarm_info = await prisma.device_alarm_info.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends device_alarm_infoFindFirstArgs>(args?: SelectSubset<T, device_alarm_infoFindFirstArgs<ExtArgs>>): Prisma__device_alarm_infoClient<$Result.GetResult<Prisma.$device_alarm_infoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device_alarm_info that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {device_alarm_infoFindFirstOrThrowArgs} args - Arguments to find a Device_alarm_info
     * @example
     * // Get one Device_alarm_info
     * const device_alarm_info = await prisma.device_alarm_info.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends device_alarm_infoFindFirstOrThrowArgs>(args?: SelectSubset<T, device_alarm_infoFindFirstOrThrowArgs<ExtArgs>>): Prisma__device_alarm_infoClient<$Result.GetResult<Prisma.$device_alarm_infoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Device_alarm_infos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {device_alarm_infoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Device_alarm_infos
     * const device_alarm_infos = await prisma.device_alarm_info.findMany()
     * 
     * // Get first 10 Device_alarm_infos
     * const device_alarm_infos = await prisma.device_alarm_info.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const device_alarm_infoWithIdOnly = await prisma.device_alarm_info.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends device_alarm_infoFindManyArgs>(args?: SelectSubset<T, device_alarm_infoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$device_alarm_infoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device_alarm_info.
     * @param {device_alarm_infoCreateArgs} args - Arguments to create a Device_alarm_info.
     * @example
     * // Create one Device_alarm_info
     * const Device_alarm_info = await prisma.device_alarm_info.create({
     *   data: {
     *     // ... data to create a Device_alarm_info
     *   }
     * })
     * 
     */
    create<T extends device_alarm_infoCreateArgs>(args: SelectSubset<T, device_alarm_infoCreateArgs<ExtArgs>>): Prisma__device_alarm_infoClient<$Result.GetResult<Prisma.$device_alarm_infoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Device_alarm_infos.
     * @param {device_alarm_infoCreateManyArgs} args - Arguments to create many Device_alarm_infos.
     * @example
     * // Create many Device_alarm_infos
     * const device_alarm_info = await prisma.device_alarm_info.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends device_alarm_infoCreateManyArgs>(args?: SelectSubset<T, device_alarm_infoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Device_alarm_infos and returns the data saved in the database.
     * @param {device_alarm_infoCreateManyAndReturnArgs} args - Arguments to create many Device_alarm_infos.
     * @example
     * // Create many Device_alarm_infos
     * const device_alarm_info = await prisma.device_alarm_info.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Device_alarm_infos and only return the `id`
     * const device_alarm_infoWithIdOnly = await prisma.device_alarm_info.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends device_alarm_infoCreateManyAndReturnArgs>(args?: SelectSubset<T, device_alarm_infoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$device_alarm_infoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Device_alarm_info.
     * @param {device_alarm_infoDeleteArgs} args - Arguments to delete one Device_alarm_info.
     * @example
     * // Delete one Device_alarm_info
     * const Device_alarm_info = await prisma.device_alarm_info.delete({
     *   where: {
     *     // ... filter to delete one Device_alarm_info
     *   }
     * })
     * 
     */
    delete<T extends device_alarm_infoDeleteArgs>(args: SelectSubset<T, device_alarm_infoDeleteArgs<ExtArgs>>): Prisma__device_alarm_infoClient<$Result.GetResult<Prisma.$device_alarm_infoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device_alarm_info.
     * @param {device_alarm_infoUpdateArgs} args - Arguments to update one Device_alarm_info.
     * @example
     * // Update one Device_alarm_info
     * const device_alarm_info = await prisma.device_alarm_info.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends device_alarm_infoUpdateArgs>(args: SelectSubset<T, device_alarm_infoUpdateArgs<ExtArgs>>): Prisma__device_alarm_infoClient<$Result.GetResult<Prisma.$device_alarm_infoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Device_alarm_infos.
     * @param {device_alarm_infoDeleteManyArgs} args - Arguments to filter Device_alarm_infos to delete.
     * @example
     * // Delete a few Device_alarm_infos
     * const { count } = await prisma.device_alarm_info.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends device_alarm_infoDeleteManyArgs>(args?: SelectSubset<T, device_alarm_infoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Device_alarm_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {device_alarm_infoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Device_alarm_infos
     * const device_alarm_info = await prisma.device_alarm_info.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends device_alarm_infoUpdateManyArgs>(args: SelectSubset<T, device_alarm_infoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Device_alarm_infos and returns the data updated in the database.
     * @param {device_alarm_infoUpdateManyAndReturnArgs} args - Arguments to update many Device_alarm_infos.
     * @example
     * // Update many Device_alarm_infos
     * const device_alarm_info = await prisma.device_alarm_info.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Device_alarm_infos and only return the `id`
     * const device_alarm_infoWithIdOnly = await prisma.device_alarm_info.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends device_alarm_infoUpdateManyAndReturnArgs>(args: SelectSubset<T, device_alarm_infoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$device_alarm_infoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Device_alarm_info.
     * @param {device_alarm_infoUpsertArgs} args - Arguments to update or create a Device_alarm_info.
     * @example
     * // Update or create a Device_alarm_info
     * const device_alarm_info = await prisma.device_alarm_info.upsert({
     *   create: {
     *     // ... data to create a Device_alarm_info
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device_alarm_info we want to update
     *   }
     * })
     */
    upsert<T extends device_alarm_infoUpsertArgs>(args: SelectSubset<T, device_alarm_infoUpsertArgs<ExtArgs>>): Prisma__device_alarm_infoClient<$Result.GetResult<Prisma.$device_alarm_infoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Device_alarm_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {device_alarm_infoCountArgs} args - Arguments to filter Device_alarm_infos to count.
     * @example
     * // Count the number of Device_alarm_infos
     * const count = await prisma.device_alarm_info.count({
     *   where: {
     *     // ... the filter for the Device_alarm_infos we want to count
     *   }
     * })
    **/
    count<T extends device_alarm_infoCountArgs>(
      args?: Subset<T, device_alarm_infoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Device_alarm_infoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device_alarm_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Device_alarm_infoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Device_alarm_infoAggregateArgs>(args: Subset<T, Device_alarm_infoAggregateArgs>): Prisma.PrismaPromise<GetDevice_alarm_infoAggregateType<T>>

    /**
     * Group by Device_alarm_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {device_alarm_infoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends device_alarm_infoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: device_alarm_infoGroupByArgs['orderBy'] }
        : { orderBy?: device_alarm_infoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, device_alarm_infoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDevice_alarm_infoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the device_alarm_info model
   */
  readonly fields: device_alarm_infoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for device_alarm_info.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__device_alarm_infoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends device_basic_infoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, device_basic_infoDefaultArgs<ExtArgs>>): Prisma__device_basic_infoClient<$Result.GetResult<Prisma.$device_basic_infoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the device_alarm_info model
   */
  interface device_alarm_infoFieldRefs {
    readonly id: FieldRef<"device_alarm_info", 'BigInt'>
    readonly device_id: FieldRef<"device_alarm_info", 'BigInt'>
    readonly message: FieldRef<"device_alarm_info", 'String'>
    readonly occurred_at: FieldRef<"device_alarm_info", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * device_alarm_info findUnique
   */
  export type device_alarm_infoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_alarm_info
     */
    select?: device_alarm_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_alarm_info
     */
    omit?: device_alarm_infoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_alarm_infoInclude<ExtArgs> | null
    /**
     * Filter, which device_alarm_info to fetch.
     */
    where: device_alarm_infoWhereUniqueInput
  }

  /**
   * device_alarm_info findUniqueOrThrow
   */
  export type device_alarm_infoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_alarm_info
     */
    select?: device_alarm_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_alarm_info
     */
    omit?: device_alarm_infoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_alarm_infoInclude<ExtArgs> | null
    /**
     * Filter, which device_alarm_info to fetch.
     */
    where: device_alarm_infoWhereUniqueInput
  }

  /**
   * device_alarm_info findFirst
   */
  export type device_alarm_infoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_alarm_info
     */
    select?: device_alarm_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_alarm_info
     */
    omit?: device_alarm_infoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_alarm_infoInclude<ExtArgs> | null
    /**
     * Filter, which device_alarm_info to fetch.
     */
    where?: device_alarm_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of device_alarm_infos to fetch.
     */
    orderBy?: device_alarm_infoOrderByWithRelationInput | device_alarm_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for device_alarm_infos.
     */
    cursor?: device_alarm_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` device_alarm_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` device_alarm_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of device_alarm_infos.
     */
    distinct?: Device_alarm_infoScalarFieldEnum | Device_alarm_infoScalarFieldEnum[]
  }

  /**
   * device_alarm_info findFirstOrThrow
   */
  export type device_alarm_infoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_alarm_info
     */
    select?: device_alarm_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_alarm_info
     */
    omit?: device_alarm_infoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_alarm_infoInclude<ExtArgs> | null
    /**
     * Filter, which device_alarm_info to fetch.
     */
    where?: device_alarm_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of device_alarm_infos to fetch.
     */
    orderBy?: device_alarm_infoOrderByWithRelationInput | device_alarm_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for device_alarm_infos.
     */
    cursor?: device_alarm_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` device_alarm_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` device_alarm_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of device_alarm_infos.
     */
    distinct?: Device_alarm_infoScalarFieldEnum | Device_alarm_infoScalarFieldEnum[]
  }

  /**
   * device_alarm_info findMany
   */
  export type device_alarm_infoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_alarm_info
     */
    select?: device_alarm_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_alarm_info
     */
    omit?: device_alarm_infoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_alarm_infoInclude<ExtArgs> | null
    /**
     * Filter, which device_alarm_infos to fetch.
     */
    where?: device_alarm_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of device_alarm_infos to fetch.
     */
    orderBy?: device_alarm_infoOrderByWithRelationInput | device_alarm_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing device_alarm_infos.
     */
    cursor?: device_alarm_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` device_alarm_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` device_alarm_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of device_alarm_infos.
     */
    distinct?: Device_alarm_infoScalarFieldEnum | Device_alarm_infoScalarFieldEnum[]
  }

  /**
   * device_alarm_info create
   */
  export type device_alarm_infoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_alarm_info
     */
    select?: device_alarm_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_alarm_info
     */
    omit?: device_alarm_infoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_alarm_infoInclude<ExtArgs> | null
    /**
     * The data needed to create a device_alarm_info.
     */
    data: XOR<device_alarm_infoCreateInput, device_alarm_infoUncheckedCreateInput>
  }

  /**
   * device_alarm_info createMany
   */
  export type device_alarm_infoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many device_alarm_infos.
     */
    data: device_alarm_infoCreateManyInput | device_alarm_infoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * device_alarm_info createManyAndReturn
   */
  export type device_alarm_infoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_alarm_info
     */
    select?: device_alarm_infoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the device_alarm_info
     */
    omit?: device_alarm_infoOmit<ExtArgs> | null
    /**
     * The data used to create many device_alarm_infos.
     */
    data: device_alarm_infoCreateManyInput | device_alarm_infoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_alarm_infoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * device_alarm_info update
   */
  export type device_alarm_infoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_alarm_info
     */
    select?: device_alarm_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_alarm_info
     */
    omit?: device_alarm_infoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_alarm_infoInclude<ExtArgs> | null
    /**
     * The data needed to update a device_alarm_info.
     */
    data: XOR<device_alarm_infoUpdateInput, device_alarm_infoUncheckedUpdateInput>
    /**
     * Choose, which device_alarm_info to update.
     */
    where: device_alarm_infoWhereUniqueInput
  }

  /**
   * device_alarm_info updateMany
   */
  export type device_alarm_infoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update device_alarm_infos.
     */
    data: XOR<device_alarm_infoUpdateManyMutationInput, device_alarm_infoUncheckedUpdateManyInput>
    /**
     * Filter which device_alarm_infos to update
     */
    where?: device_alarm_infoWhereInput
    /**
     * Limit how many device_alarm_infos to update.
     */
    limit?: number
  }

  /**
   * device_alarm_info updateManyAndReturn
   */
  export type device_alarm_infoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_alarm_info
     */
    select?: device_alarm_infoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the device_alarm_info
     */
    omit?: device_alarm_infoOmit<ExtArgs> | null
    /**
     * The data used to update device_alarm_infos.
     */
    data: XOR<device_alarm_infoUpdateManyMutationInput, device_alarm_infoUncheckedUpdateManyInput>
    /**
     * Filter which device_alarm_infos to update
     */
    where?: device_alarm_infoWhereInput
    /**
     * Limit how many device_alarm_infos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_alarm_infoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * device_alarm_info upsert
   */
  export type device_alarm_infoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_alarm_info
     */
    select?: device_alarm_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_alarm_info
     */
    omit?: device_alarm_infoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_alarm_infoInclude<ExtArgs> | null
    /**
     * The filter to search for the device_alarm_info to update in case it exists.
     */
    where: device_alarm_infoWhereUniqueInput
    /**
     * In case the device_alarm_info found by the `where` argument doesn't exist, create a new device_alarm_info with this data.
     */
    create: XOR<device_alarm_infoCreateInput, device_alarm_infoUncheckedCreateInput>
    /**
     * In case the device_alarm_info was found with the provided `where` argument, update it with this data.
     */
    update: XOR<device_alarm_infoUpdateInput, device_alarm_infoUncheckedUpdateInput>
  }

  /**
   * device_alarm_info delete
   */
  export type device_alarm_infoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_alarm_info
     */
    select?: device_alarm_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_alarm_info
     */
    omit?: device_alarm_infoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_alarm_infoInclude<ExtArgs> | null
    /**
     * Filter which device_alarm_info to delete.
     */
    where: device_alarm_infoWhereUniqueInput
  }

  /**
   * device_alarm_info deleteMany
   */
  export type device_alarm_infoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which device_alarm_infos to delete
     */
    where?: device_alarm_infoWhereInput
    /**
     * Limit how many device_alarm_infos to delete.
     */
    limit?: number
  }

  /**
   * device_alarm_info without action
   */
  export type device_alarm_infoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_alarm_info
     */
    select?: device_alarm_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device_alarm_info
     */
    omit?: device_alarm_infoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: device_alarm_infoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Device_basic_infoScalarFieldEnum: {
    name: 'name',
    id: 'id'
  };

  export type Device_basic_infoScalarFieldEnum = (typeof Device_basic_infoScalarFieldEnum)[keyof typeof Device_basic_infoScalarFieldEnum]


  export const Device_alarm_infoScalarFieldEnum: {
    id: 'id',
    device_id: 'device_id',
    message: 'message',
    occurred_at: 'occurred_at'
  };

  export type Device_alarm_infoScalarFieldEnum = (typeof Device_alarm_infoScalarFieldEnum)[keyof typeof Device_alarm_infoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type device_basic_infoWhereInput = {
    AND?: device_basic_infoWhereInput | device_basic_infoWhereInput[]
    OR?: device_basic_infoWhereInput[]
    NOT?: device_basic_infoWhereInput | device_basic_infoWhereInput[]
    name?: StringNullableFilter<"device_basic_info"> | string | null
    id?: BigIntFilter<"device_basic_info"> | bigint | number
    alarms?: Device_alarm_infoListRelationFilter
  }

  export type device_basic_infoOrderByWithRelationInput = {
    name?: SortOrderInput | SortOrder
    id?: SortOrder
    alarms?: device_alarm_infoOrderByRelationAggregateInput
  }

  export type device_basic_infoWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: device_basic_infoWhereInput | device_basic_infoWhereInput[]
    OR?: device_basic_infoWhereInput[]
    NOT?: device_basic_infoWhereInput | device_basic_infoWhereInput[]
    name?: StringNullableFilter<"device_basic_info"> | string | null
    alarms?: Device_alarm_infoListRelationFilter
  }, "id">

  export type device_basic_infoOrderByWithAggregationInput = {
    name?: SortOrderInput | SortOrder
    id?: SortOrder
    _count?: device_basic_infoCountOrderByAggregateInput
    _avg?: device_basic_infoAvgOrderByAggregateInput
    _max?: device_basic_infoMaxOrderByAggregateInput
    _min?: device_basic_infoMinOrderByAggregateInput
    _sum?: device_basic_infoSumOrderByAggregateInput
  }

  export type device_basic_infoScalarWhereWithAggregatesInput = {
    AND?: device_basic_infoScalarWhereWithAggregatesInput | device_basic_infoScalarWhereWithAggregatesInput[]
    OR?: device_basic_infoScalarWhereWithAggregatesInput[]
    NOT?: device_basic_infoScalarWhereWithAggregatesInput | device_basic_infoScalarWhereWithAggregatesInput[]
    name?: StringNullableWithAggregatesFilter<"device_basic_info"> | string | null
    id?: BigIntWithAggregatesFilter<"device_basic_info"> | bigint | number
  }

  export type device_alarm_infoWhereInput = {
    AND?: device_alarm_infoWhereInput | device_alarm_infoWhereInput[]
    OR?: device_alarm_infoWhereInput[]
    NOT?: device_alarm_infoWhereInput | device_alarm_infoWhereInput[]
    id?: BigIntFilter<"device_alarm_info"> | bigint | number
    device_id?: BigIntFilter<"device_alarm_info"> | bigint | number
    message?: StringFilter<"device_alarm_info"> | string
    occurred_at?: DateTimeFilter<"device_alarm_info"> | Date | string
    device?: XOR<Device_basic_infoScalarRelationFilter, device_basic_infoWhereInput>
  }

  export type device_alarm_infoOrderByWithRelationInput = {
    id?: SortOrder
    device_id?: SortOrder
    message?: SortOrder
    occurred_at?: SortOrder
    device?: device_basic_infoOrderByWithRelationInput
  }

  export type device_alarm_infoWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: device_alarm_infoWhereInput | device_alarm_infoWhereInput[]
    OR?: device_alarm_infoWhereInput[]
    NOT?: device_alarm_infoWhereInput | device_alarm_infoWhereInput[]
    device_id?: BigIntFilter<"device_alarm_info"> | bigint | number
    message?: StringFilter<"device_alarm_info"> | string
    occurred_at?: DateTimeFilter<"device_alarm_info"> | Date | string
    device?: XOR<Device_basic_infoScalarRelationFilter, device_basic_infoWhereInput>
  }, "id">

  export type device_alarm_infoOrderByWithAggregationInput = {
    id?: SortOrder
    device_id?: SortOrder
    message?: SortOrder
    occurred_at?: SortOrder
    _count?: device_alarm_infoCountOrderByAggregateInput
    _avg?: device_alarm_infoAvgOrderByAggregateInput
    _max?: device_alarm_infoMaxOrderByAggregateInput
    _min?: device_alarm_infoMinOrderByAggregateInput
    _sum?: device_alarm_infoSumOrderByAggregateInput
  }

  export type device_alarm_infoScalarWhereWithAggregatesInput = {
    AND?: device_alarm_infoScalarWhereWithAggregatesInput | device_alarm_infoScalarWhereWithAggregatesInput[]
    OR?: device_alarm_infoScalarWhereWithAggregatesInput[]
    NOT?: device_alarm_infoScalarWhereWithAggregatesInput | device_alarm_infoScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"device_alarm_info"> | bigint | number
    device_id?: BigIntWithAggregatesFilter<"device_alarm_info"> | bigint | number
    message?: StringWithAggregatesFilter<"device_alarm_info"> | string
    occurred_at?: DateTimeWithAggregatesFilter<"device_alarm_info"> | Date | string
  }

  export type device_basic_infoCreateInput = {
    name?: string | null
    id?: bigint | number
    alarms?: device_alarm_infoCreateNestedManyWithoutDeviceInput
  }

  export type device_basic_infoUncheckedCreateInput = {
    name?: string | null
    id?: bigint | number
    alarms?: device_alarm_infoUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type device_basic_infoUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    alarms?: device_alarm_infoUpdateManyWithoutDeviceNestedInput
  }

  export type device_basic_infoUncheckedUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    alarms?: device_alarm_infoUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type device_basic_infoCreateManyInput = {
    name?: string | null
    id?: bigint | number
  }

  export type device_basic_infoUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type device_basic_infoUncheckedUpdateManyInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type device_alarm_infoCreateInput = {
    id?: bigint | number
    message: string
    occurred_at?: Date | string
    device: device_basic_infoCreateNestedOneWithoutAlarmsInput
  }

  export type device_alarm_infoUncheckedCreateInput = {
    id?: bigint | number
    device_id: bigint | number
    message: string
    occurred_at?: Date | string
  }

  export type device_alarm_infoUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    message?: StringFieldUpdateOperationsInput | string
    occurred_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: device_basic_infoUpdateOneRequiredWithoutAlarmsNestedInput
  }

  export type device_alarm_infoUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    device_id?: BigIntFieldUpdateOperationsInput | bigint | number
    message?: StringFieldUpdateOperationsInput | string
    occurred_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type device_alarm_infoCreateManyInput = {
    id?: bigint | number
    device_id: bigint | number
    message: string
    occurred_at?: Date | string
  }

  export type device_alarm_infoUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    message?: StringFieldUpdateOperationsInput | string
    occurred_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type device_alarm_infoUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    device_id?: BigIntFieldUpdateOperationsInput | bigint | number
    message?: StringFieldUpdateOperationsInput | string
    occurred_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type Device_alarm_infoListRelationFilter = {
    every?: device_alarm_infoWhereInput
    some?: device_alarm_infoWhereInput
    none?: device_alarm_infoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type device_alarm_infoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type device_basic_infoCountOrderByAggregateInput = {
    name?: SortOrder
    id?: SortOrder
  }

  export type device_basic_infoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type device_basic_infoMaxOrderByAggregateInput = {
    name?: SortOrder
    id?: SortOrder
  }

  export type device_basic_infoMinOrderByAggregateInput = {
    name?: SortOrder
    id?: SortOrder
  }

  export type device_basic_infoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Device_basic_infoScalarRelationFilter = {
    is?: device_basic_infoWhereInput
    isNot?: device_basic_infoWhereInput
  }

  export type device_alarm_infoCountOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
    message?: SortOrder
    occurred_at?: SortOrder
  }

  export type device_alarm_infoAvgOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
  }

  export type device_alarm_infoMaxOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
    message?: SortOrder
    occurred_at?: SortOrder
  }

  export type device_alarm_infoMinOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
    message?: SortOrder
    occurred_at?: SortOrder
  }

  export type device_alarm_infoSumOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type device_alarm_infoCreateNestedManyWithoutDeviceInput = {
    create?: XOR<device_alarm_infoCreateWithoutDeviceInput, device_alarm_infoUncheckedCreateWithoutDeviceInput> | device_alarm_infoCreateWithoutDeviceInput[] | device_alarm_infoUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: device_alarm_infoCreateOrConnectWithoutDeviceInput | device_alarm_infoCreateOrConnectWithoutDeviceInput[]
    createMany?: device_alarm_infoCreateManyDeviceInputEnvelope
    connect?: device_alarm_infoWhereUniqueInput | device_alarm_infoWhereUniqueInput[]
  }

  export type device_alarm_infoUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<device_alarm_infoCreateWithoutDeviceInput, device_alarm_infoUncheckedCreateWithoutDeviceInput> | device_alarm_infoCreateWithoutDeviceInput[] | device_alarm_infoUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: device_alarm_infoCreateOrConnectWithoutDeviceInput | device_alarm_infoCreateOrConnectWithoutDeviceInput[]
    createMany?: device_alarm_infoCreateManyDeviceInputEnvelope
    connect?: device_alarm_infoWhereUniqueInput | device_alarm_infoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type device_alarm_infoUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<device_alarm_infoCreateWithoutDeviceInput, device_alarm_infoUncheckedCreateWithoutDeviceInput> | device_alarm_infoCreateWithoutDeviceInput[] | device_alarm_infoUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: device_alarm_infoCreateOrConnectWithoutDeviceInput | device_alarm_infoCreateOrConnectWithoutDeviceInput[]
    upsert?: device_alarm_infoUpsertWithWhereUniqueWithoutDeviceInput | device_alarm_infoUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: device_alarm_infoCreateManyDeviceInputEnvelope
    set?: device_alarm_infoWhereUniqueInput | device_alarm_infoWhereUniqueInput[]
    disconnect?: device_alarm_infoWhereUniqueInput | device_alarm_infoWhereUniqueInput[]
    delete?: device_alarm_infoWhereUniqueInput | device_alarm_infoWhereUniqueInput[]
    connect?: device_alarm_infoWhereUniqueInput | device_alarm_infoWhereUniqueInput[]
    update?: device_alarm_infoUpdateWithWhereUniqueWithoutDeviceInput | device_alarm_infoUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: device_alarm_infoUpdateManyWithWhereWithoutDeviceInput | device_alarm_infoUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: device_alarm_infoScalarWhereInput | device_alarm_infoScalarWhereInput[]
  }

  export type device_alarm_infoUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<device_alarm_infoCreateWithoutDeviceInput, device_alarm_infoUncheckedCreateWithoutDeviceInput> | device_alarm_infoCreateWithoutDeviceInput[] | device_alarm_infoUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: device_alarm_infoCreateOrConnectWithoutDeviceInput | device_alarm_infoCreateOrConnectWithoutDeviceInput[]
    upsert?: device_alarm_infoUpsertWithWhereUniqueWithoutDeviceInput | device_alarm_infoUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: device_alarm_infoCreateManyDeviceInputEnvelope
    set?: device_alarm_infoWhereUniqueInput | device_alarm_infoWhereUniqueInput[]
    disconnect?: device_alarm_infoWhereUniqueInput | device_alarm_infoWhereUniqueInput[]
    delete?: device_alarm_infoWhereUniqueInput | device_alarm_infoWhereUniqueInput[]
    connect?: device_alarm_infoWhereUniqueInput | device_alarm_infoWhereUniqueInput[]
    update?: device_alarm_infoUpdateWithWhereUniqueWithoutDeviceInput | device_alarm_infoUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: device_alarm_infoUpdateManyWithWhereWithoutDeviceInput | device_alarm_infoUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: device_alarm_infoScalarWhereInput | device_alarm_infoScalarWhereInput[]
  }

  export type device_basic_infoCreateNestedOneWithoutAlarmsInput = {
    create?: XOR<device_basic_infoCreateWithoutAlarmsInput, device_basic_infoUncheckedCreateWithoutAlarmsInput>
    connectOrCreate?: device_basic_infoCreateOrConnectWithoutAlarmsInput
    connect?: device_basic_infoWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type device_basic_infoUpdateOneRequiredWithoutAlarmsNestedInput = {
    create?: XOR<device_basic_infoCreateWithoutAlarmsInput, device_basic_infoUncheckedCreateWithoutAlarmsInput>
    connectOrCreate?: device_basic_infoCreateOrConnectWithoutAlarmsInput
    upsert?: device_basic_infoUpsertWithoutAlarmsInput
    connect?: device_basic_infoWhereUniqueInput
    update?: XOR<XOR<device_basic_infoUpdateToOneWithWhereWithoutAlarmsInput, device_basic_infoUpdateWithoutAlarmsInput>, device_basic_infoUncheckedUpdateWithoutAlarmsInput>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type device_alarm_infoCreateWithoutDeviceInput = {
    id?: bigint | number
    message: string
    occurred_at?: Date | string
  }

  export type device_alarm_infoUncheckedCreateWithoutDeviceInput = {
    id?: bigint | number
    message: string
    occurred_at?: Date | string
  }

  export type device_alarm_infoCreateOrConnectWithoutDeviceInput = {
    where: device_alarm_infoWhereUniqueInput
    create: XOR<device_alarm_infoCreateWithoutDeviceInput, device_alarm_infoUncheckedCreateWithoutDeviceInput>
  }

  export type device_alarm_infoCreateManyDeviceInputEnvelope = {
    data: device_alarm_infoCreateManyDeviceInput | device_alarm_infoCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type device_alarm_infoUpsertWithWhereUniqueWithoutDeviceInput = {
    where: device_alarm_infoWhereUniqueInput
    update: XOR<device_alarm_infoUpdateWithoutDeviceInput, device_alarm_infoUncheckedUpdateWithoutDeviceInput>
    create: XOR<device_alarm_infoCreateWithoutDeviceInput, device_alarm_infoUncheckedCreateWithoutDeviceInput>
  }

  export type device_alarm_infoUpdateWithWhereUniqueWithoutDeviceInput = {
    where: device_alarm_infoWhereUniqueInput
    data: XOR<device_alarm_infoUpdateWithoutDeviceInput, device_alarm_infoUncheckedUpdateWithoutDeviceInput>
  }

  export type device_alarm_infoUpdateManyWithWhereWithoutDeviceInput = {
    where: device_alarm_infoScalarWhereInput
    data: XOR<device_alarm_infoUpdateManyMutationInput, device_alarm_infoUncheckedUpdateManyWithoutDeviceInput>
  }

  export type device_alarm_infoScalarWhereInput = {
    AND?: device_alarm_infoScalarWhereInput | device_alarm_infoScalarWhereInput[]
    OR?: device_alarm_infoScalarWhereInput[]
    NOT?: device_alarm_infoScalarWhereInput | device_alarm_infoScalarWhereInput[]
    id?: BigIntFilter<"device_alarm_info"> | bigint | number
    device_id?: BigIntFilter<"device_alarm_info"> | bigint | number
    message?: StringFilter<"device_alarm_info"> | string
    occurred_at?: DateTimeFilter<"device_alarm_info"> | Date | string
  }

  export type device_basic_infoCreateWithoutAlarmsInput = {
    name?: string | null
    id?: bigint | number
  }

  export type device_basic_infoUncheckedCreateWithoutAlarmsInput = {
    name?: string | null
    id?: bigint | number
  }

  export type device_basic_infoCreateOrConnectWithoutAlarmsInput = {
    where: device_basic_infoWhereUniqueInput
    create: XOR<device_basic_infoCreateWithoutAlarmsInput, device_basic_infoUncheckedCreateWithoutAlarmsInput>
  }

  export type device_basic_infoUpsertWithoutAlarmsInput = {
    update: XOR<device_basic_infoUpdateWithoutAlarmsInput, device_basic_infoUncheckedUpdateWithoutAlarmsInput>
    create: XOR<device_basic_infoCreateWithoutAlarmsInput, device_basic_infoUncheckedCreateWithoutAlarmsInput>
    where?: device_basic_infoWhereInput
  }

  export type device_basic_infoUpdateToOneWithWhereWithoutAlarmsInput = {
    where?: device_basic_infoWhereInput
    data: XOR<device_basic_infoUpdateWithoutAlarmsInput, device_basic_infoUncheckedUpdateWithoutAlarmsInput>
  }

  export type device_basic_infoUpdateWithoutAlarmsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type device_basic_infoUncheckedUpdateWithoutAlarmsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type device_alarm_infoCreateManyDeviceInput = {
    id?: bigint | number
    message: string
    occurred_at?: Date | string
  }

  export type device_alarm_infoUpdateWithoutDeviceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    message?: StringFieldUpdateOperationsInput | string
    occurred_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type device_alarm_infoUncheckedUpdateWithoutDeviceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    message?: StringFieldUpdateOperationsInput | string
    occurred_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type device_alarm_infoUncheckedUpdateManyWithoutDeviceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    message?: StringFieldUpdateOperationsInput | string
    occurred_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}