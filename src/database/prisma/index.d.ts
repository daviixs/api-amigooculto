
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model Participant
 * 
 */
export type Participant = $Result.DefaultSelection<Prisma.$ParticipantPayload>
/**
 * Model Wishlist
 * 
 */
export type Wishlist = $Result.DefaultSelection<Prisma.$WishlistPayload>
/**
 * Model Restriction
 * 
 */
export type Restriction = $Result.DefaultSelection<Prisma.$RestrictionPayload>
/**
 * Model DrawResult
 * 
 */
export type DrawResult = $Result.DefaultSelection<Prisma.$DrawResultPayload>
/**
 * Model Pair
 * 
 */
export type Pair = $Result.DefaultSelection<Prisma.$PairPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ParticipantStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED'
};

export type ParticipantStatus = (typeof ParticipantStatus)[keyof typeof ParticipantStatus]


export const NotificationType: {
  INVITE: 'INVITE',
  APPROVAL: 'APPROVAL',
  DRAW_RESULT: 'DRAW_RESULT',
  GENERAL: 'GENERAL'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]

}

export type ParticipantStatus = $Enums.ParticipantStatus

export const ParticipantStatus: typeof $Enums.ParticipantStatus

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participant`: Exposes CRUD operations for the **Participant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participants
    * const participants = await prisma.participant.findMany()
    * ```
    */
  get participant(): Prisma.ParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wishlist`: Exposes CRUD operations for the **Wishlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wishlists
    * const wishlists = await prisma.wishlist.findMany()
    * ```
    */
  get wishlist(): Prisma.WishlistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restriction`: Exposes CRUD operations for the **Restriction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Restrictions
    * const restrictions = await prisma.restriction.findMany()
    * ```
    */
  get restriction(): Prisma.RestrictionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.drawResult`: Exposes CRUD operations for the **DrawResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DrawResults
    * const drawResults = await prisma.drawResult.findMany()
    * ```
    */
  get drawResult(): Prisma.DrawResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pair`: Exposes CRUD operations for the **Pair** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pairs
    * const pairs = await prisma.pair.findMany()
    * ```
    */
  get pair(): Prisma.PairDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
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
    User: 'User',
    Group: 'Group',
    Participant: 'Participant',
    Wishlist: 'Wishlist',
    Restriction: 'Restriction',
    DrawResult: 'DrawResult',
    Pair: 'Pair',
    Notification: 'Notification'
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
      modelProps: "user" | "group" | "participant" | "wishlist" | "restriction" | "drawResult" | "pair" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      Participant: {
        payload: Prisma.$ParticipantPayload<ExtArgs>
        fields: Prisma.ParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          findFirst: {
            args: Prisma.ParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          findMany: {
            args: Prisma.ParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          create: {
            args: Prisma.ParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          createMany: {
            args: Prisma.ParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          delete: {
            args: Prisma.ParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          update: {
            args: Prisma.ParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          deleteMany: {
            args: Prisma.ParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          upsert: {
            args: Prisma.ParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          aggregate: {
            args: Prisma.ParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipant>
          }
          groupBy: {
            args: Prisma.ParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipantCountAggregateOutputType> | number
          }
        }
      }
      Wishlist: {
        payload: Prisma.$WishlistPayload<ExtArgs>
        fields: Prisma.WishlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WishlistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WishlistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>
          }
          findFirst: {
            args: Prisma.WishlistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WishlistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>
          }
          findMany: {
            args: Prisma.WishlistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>[]
          }
          create: {
            args: Prisma.WishlistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>
          }
          createMany: {
            args: Prisma.WishlistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WishlistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>[]
          }
          delete: {
            args: Prisma.WishlistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>
          }
          update: {
            args: Prisma.WishlistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>
          }
          deleteMany: {
            args: Prisma.WishlistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WishlistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WishlistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>[]
          }
          upsert: {
            args: Prisma.WishlistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistPayload>
          }
          aggregate: {
            args: Prisma.WishlistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWishlist>
          }
          groupBy: {
            args: Prisma.WishlistGroupByArgs<ExtArgs>
            result: $Utils.Optional<WishlistGroupByOutputType>[]
          }
          count: {
            args: Prisma.WishlistCountArgs<ExtArgs>
            result: $Utils.Optional<WishlistCountAggregateOutputType> | number
          }
        }
      }
      Restriction: {
        payload: Prisma.$RestrictionPayload<ExtArgs>
        fields: Prisma.RestrictionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestrictionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestrictionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestrictionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestrictionPayload>
          }
          findFirst: {
            args: Prisma.RestrictionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestrictionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestrictionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestrictionPayload>
          }
          findMany: {
            args: Prisma.RestrictionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestrictionPayload>[]
          }
          create: {
            args: Prisma.RestrictionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestrictionPayload>
          }
          createMany: {
            args: Prisma.RestrictionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RestrictionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestrictionPayload>[]
          }
          delete: {
            args: Prisma.RestrictionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestrictionPayload>
          }
          update: {
            args: Prisma.RestrictionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestrictionPayload>
          }
          deleteMany: {
            args: Prisma.RestrictionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestrictionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RestrictionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestrictionPayload>[]
          }
          upsert: {
            args: Prisma.RestrictionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestrictionPayload>
          }
          aggregate: {
            args: Prisma.RestrictionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestriction>
          }
          groupBy: {
            args: Prisma.RestrictionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestrictionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestrictionCountArgs<ExtArgs>
            result: $Utils.Optional<RestrictionCountAggregateOutputType> | number
          }
        }
      }
      DrawResult: {
        payload: Prisma.$DrawResultPayload<ExtArgs>
        fields: Prisma.DrawResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DrawResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DrawResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawResultPayload>
          }
          findFirst: {
            args: Prisma.DrawResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DrawResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawResultPayload>
          }
          findMany: {
            args: Prisma.DrawResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawResultPayload>[]
          }
          create: {
            args: Prisma.DrawResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawResultPayload>
          }
          createMany: {
            args: Prisma.DrawResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DrawResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawResultPayload>[]
          }
          delete: {
            args: Prisma.DrawResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawResultPayload>
          }
          update: {
            args: Prisma.DrawResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawResultPayload>
          }
          deleteMany: {
            args: Prisma.DrawResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DrawResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DrawResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawResultPayload>[]
          }
          upsert: {
            args: Prisma.DrawResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawResultPayload>
          }
          aggregate: {
            args: Prisma.DrawResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDrawResult>
          }
          groupBy: {
            args: Prisma.DrawResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<DrawResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.DrawResultCountArgs<ExtArgs>
            result: $Utils.Optional<DrawResultCountAggregateOutputType> | number
          }
        }
      }
      Pair: {
        payload: Prisma.$PairPayload<ExtArgs>
        fields: Prisma.PairFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PairFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PairFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload>
          }
          findFirst: {
            args: Prisma.PairFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PairFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload>
          }
          findMany: {
            args: Prisma.PairFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload>[]
          }
          create: {
            args: Prisma.PairCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload>
          }
          createMany: {
            args: Prisma.PairCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PairCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload>[]
          }
          delete: {
            args: Prisma.PairDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload>
          }
          update: {
            args: Prisma.PairUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload>
          }
          deleteMany: {
            args: Prisma.PairDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PairUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PairUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload>[]
          }
          upsert: {
            args: Prisma.PairUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PairPayload>
          }
          aggregate: {
            args: Prisma.PairAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePair>
          }
          groupBy: {
            args: Prisma.PairGroupByArgs<ExtArgs>
            result: $Utils.Optional<PairGroupByOutputType>[]
          }
          count: {
            args: Prisma.PairCountArgs<ExtArgs>
            result: $Utils.Optional<PairCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
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
    user?: UserOmit
    group?: GroupOmit
    participant?: ParticipantOmit
    wishlist?: WishlistOmit
    restriction?: RestrictionOmit
    drawResult?: DrawResultOmit
    pair?: PairOmit
    notification?: NotificationOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    groupsOwned: number
    participants: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupsOwned?: boolean | UserCountOutputTypeCountGroupsOwnedArgs
    participants?: boolean | UserCountOutputTypeCountParticipantsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupsOwnedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    participants: number
    restrictions: number
    notifications: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | GroupCountOutputTypeCountParticipantsArgs
    restrictions?: boolean | GroupCountOutputTypeCountRestrictionsArgs
    notifications?: boolean | GroupCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountRestrictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestrictionWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type ParticipantCountOutputType
   */

  export type ParticipantCountOutputType = {
    giverPairs: number
    takerPairs: number
    giverRestrictions: number
    takerRestrictions: number
  }

  export type ParticipantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    giverPairs?: boolean | ParticipantCountOutputTypeCountGiverPairsArgs
    takerPairs?: boolean | ParticipantCountOutputTypeCountTakerPairsArgs
    giverRestrictions?: boolean | ParticipantCountOutputTypeCountGiverRestrictionsArgs
    takerRestrictions?: boolean | ParticipantCountOutputTypeCountTakerRestrictionsArgs
  }

  // Custom InputTypes
  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCountOutputType
     */
    select?: ParticipantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeCountGiverPairsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PairWhereInput
  }

  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeCountTakerPairsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PairWhereInput
  }

  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeCountGiverRestrictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestrictionWhereInput
  }

  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeCountTakerRestrictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestrictionWhereInput
  }


  /**
   * Count Type DrawResultCountOutputType
   */

  export type DrawResultCountOutputType = {
    pairs: number
  }

  export type DrawResultCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pairs?: boolean | DrawResultCountOutputTypeCountPairsArgs
  }

  // Custom InputTypes
  /**
   * DrawResultCountOutputType without action
   */
  export type DrawResultCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawResultCountOutputType
     */
    select?: DrawResultCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DrawResultCountOutputType without action
   */
  export type DrawResultCountOutputTypeCountPairsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PairWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groupsOwned?: boolean | User$groupsOwnedArgs<ExtArgs>
    participants?: boolean | User$participantsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupsOwned?: boolean | User$groupsOwnedArgs<ExtArgs>
    participants?: boolean | User$participantsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      groupsOwned: Prisma.$GroupPayload<ExtArgs>[]
      participants: Prisma.$ParticipantPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groupsOwned<T extends User$groupsOwnedArgs<ExtArgs> = {}>(args?: Subset<T, User$groupsOwnedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participants<T extends User$participantsArgs<ExtArgs> = {}>(args?: Subset<T, User$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.groupsOwned
   */
  export type User$groupsOwnedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * User.participants
   */
  export type User$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    where?: ParticipantWhereInput
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    cursor?: ParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupAvgAggregateOutputType = {
    id: number | null
    minValue: number | null
    maxValue: number | null
    ownerId: number | null
  }

  export type GroupSumAggregateOutputType = {
    id: number | null
    minValue: number | null
    maxValue: number | null
    ownerId: number | null
  }

  export type GroupMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    inviteCode: string | null
    minValue: number | null
    maxValue: number | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: number | null
  }

  export type GroupMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    inviteCode: string | null
    minValue: number | null
    maxValue: number | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: number | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    description: number
    inviteCode: number
    minValue: number
    maxValue: number
    createdAt: number
    updatedAt: number
    ownerId: number
    _all: number
  }


  export type GroupAvgAggregateInputType = {
    id?: true
    minValue?: true
    maxValue?: true
    ownerId?: true
  }

  export type GroupSumAggregateInputType = {
    id?: true
    minValue?: true
    maxValue?: true
    ownerId?: true
  }

  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    inviteCode?: true
    minValue?: true
    maxValue?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    inviteCode?: true
    minValue?: true
    maxValue?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    inviteCode?: true
    minValue?: true
    maxValue?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _avg?: GroupAvgAggregateInputType
    _sum?: GroupSumAggregateInputType
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: number
    name: string
    description: string | null
    inviteCode: string
    minValue: number | null
    maxValue: number | null
    createdAt: Date
    updatedAt: Date
    ownerId: number
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    inviteCode?: boolean
    minValue?: boolean
    maxValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    participants?: boolean | Group$participantsArgs<ExtArgs>
    restrictions?: boolean | Group$restrictionsArgs<ExtArgs>
    result?: boolean | Group$resultArgs<ExtArgs>
    notifications?: boolean | Group$notificationsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    inviteCode?: boolean
    minValue?: boolean
    maxValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    inviteCode?: boolean
    minValue?: boolean
    maxValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    inviteCode?: boolean
    minValue?: boolean
    maxValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "inviteCode" | "minValue" | "maxValue" | "createdAt" | "updatedAt" | "ownerId", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    participants?: boolean | Group$participantsArgs<ExtArgs>
    restrictions?: boolean | Group$restrictionsArgs<ExtArgs>
    result?: boolean | Group$resultArgs<ExtArgs>
    notifications?: boolean | Group$notificationsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      participants: Prisma.$ParticipantPayload<ExtArgs>[]
      restrictions: Prisma.$RestrictionPayload<ExtArgs>[]
      result: Prisma.$DrawResultPayload<ExtArgs> | null
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      inviteCode: string
      minValue: number | null
      maxValue: number | null
      createdAt: Date
      updatedAt: Date
      ownerId: number
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
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
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participants<T extends Group$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Group$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    restrictions<T extends Group$restrictionsArgs<ExtArgs> = {}>(args?: Subset<T, Group$restrictionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestrictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    result<T extends Group$resultArgs<ExtArgs> = {}>(args?: Subset<T, Group$resultArgs<ExtArgs>>): Prisma__DrawResultClient<$Result.GetResult<Prisma.$DrawResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    notifications<T extends Group$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Group$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'Int'>
    readonly name: FieldRef<"Group", 'String'>
    readonly description: FieldRef<"Group", 'String'>
    readonly inviteCode: FieldRef<"Group", 'String'>
    readonly minValue: FieldRef<"Group", 'Float'>
    readonly maxValue: FieldRef<"Group", 'Float'>
    readonly createdAt: FieldRef<"Group", 'DateTime'>
    readonly updatedAt: FieldRef<"Group", 'DateTime'>
    readonly ownerId: FieldRef<"Group", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.participants
   */
  export type Group$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    where?: ParticipantWhereInput
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    cursor?: ParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Group.restrictions
   */
  export type Group$restrictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restriction
     */
    select?: RestrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restriction
     */
    omit?: RestrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestrictionInclude<ExtArgs> | null
    where?: RestrictionWhereInput
    orderBy?: RestrictionOrderByWithRelationInput | RestrictionOrderByWithRelationInput[]
    cursor?: RestrictionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RestrictionScalarFieldEnum | RestrictionScalarFieldEnum[]
  }

  /**
   * Group.result
   */
  export type Group$resultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawResult
     */
    select?: DrawResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawResult
     */
    omit?: DrawResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawResultInclude<ExtArgs> | null
    where?: DrawResultWhereInput
  }

  /**
   * Group.notifications
   */
  export type Group$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model Participant
   */

  export type AggregateParticipant = {
    _count: ParticipantCountAggregateOutputType | null
    _avg: ParticipantAvgAggregateOutputType | null
    _sum: ParticipantSumAggregateOutputType | null
    _min: ParticipantMinAggregateOutputType | null
    _max: ParticipantMaxAggregateOutputType | null
  }

  export type ParticipantAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    groupId: number | null
  }

  export type ParticipantSumAggregateOutputType = {
    id: number | null
    userId: number | null
    groupId: number | null
  }

  export type ParticipantMinAggregateOutputType = {
    id: number | null
    userId: number | null
    groupId: number | null
    status: $Enums.ParticipantStatus | null
    createdAt: Date | null
  }

  export type ParticipantMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    groupId: number | null
    status: $Enums.ParticipantStatus | null
    createdAt: Date | null
  }

  export type ParticipantCountAggregateOutputType = {
    id: number
    userId: number
    groupId: number
    status: number
    createdAt: number
    _all: number
  }


  export type ParticipantAvgAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
  }

  export type ParticipantSumAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
  }

  export type ParticipantMinAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
    status?: true
    createdAt?: true
  }

  export type ParticipantMaxAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
    status?: true
    createdAt?: true
  }

  export type ParticipantCountAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participant to aggregate.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Participants
    **/
    _count?: true | ParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantMaxAggregateInputType
  }

  export type GetParticipantAggregateType<T extends ParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipant[P]>
      : GetScalarType<T[P], AggregateParticipant[P]>
  }




  export type ParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantWhereInput
    orderBy?: ParticipantOrderByWithAggregationInput | ParticipantOrderByWithAggregationInput[]
    by: ParticipantScalarFieldEnum[] | ParticipantScalarFieldEnum
    having?: ParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipantCountAggregateInputType | true
    _avg?: ParticipantAvgAggregateInputType
    _sum?: ParticipantSumAggregateInputType
    _min?: ParticipantMinAggregateInputType
    _max?: ParticipantMaxAggregateInputType
  }

  export type ParticipantGroupByOutputType = {
    id: number
    userId: number
    groupId: number
    status: $Enums.ParticipantStatus
    createdAt: Date
    _count: ParticipantCountAggregateOutputType | null
    _avg: ParticipantAvgAggregateOutputType | null
    _sum: ParticipantSumAggregateOutputType | null
    _min: ParticipantMinAggregateOutputType | null
    _max: ParticipantMaxAggregateOutputType | null
  }

  type GetParticipantGroupByPayload<T extends ParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
        }
      >
    >


  export type ParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    groupId?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
    wishlist?: boolean | Participant$wishlistArgs<ExtArgs>
    giverPairs?: boolean | Participant$giverPairsArgs<ExtArgs>
    takerPairs?: boolean | Participant$takerPairsArgs<ExtArgs>
    giverRestrictions?: boolean | Participant$giverRestrictionsArgs<ExtArgs>
    takerRestrictions?: boolean | Participant$takerRestrictionsArgs<ExtArgs>
    _count?: boolean | ParticipantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    groupId?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    groupId?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectScalar = {
    id?: boolean
    userId?: boolean
    groupId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "groupId" | "status" | "createdAt", ExtArgs["result"]["participant"]>
  export type ParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
    wishlist?: boolean | Participant$wishlistArgs<ExtArgs>
    giverPairs?: boolean | Participant$giverPairsArgs<ExtArgs>
    takerPairs?: boolean | Participant$takerPairsArgs<ExtArgs>
    giverRestrictions?: boolean | Participant$giverRestrictionsArgs<ExtArgs>
    takerRestrictions?: boolean | Participant$takerRestrictionsArgs<ExtArgs>
    _count?: boolean | ParticipantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type ParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }

  export type $ParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Participant"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      group: Prisma.$GroupPayload<ExtArgs>
      wishlist: Prisma.$WishlistPayload<ExtArgs> | null
      giverPairs: Prisma.$PairPayload<ExtArgs>[]
      takerPairs: Prisma.$PairPayload<ExtArgs>[]
      giverRestrictions: Prisma.$RestrictionPayload<ExtArgs>[]
      takerRestrictions: Prisma.$RestrictionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      groupId: number
      status: $Enums.ParticipantStatus
      createdAt: Date
    }, ExtArgs["result"]["participant"]>
    composites: {}
  }

  type ParticipantGetPayload<S extends boolean | null | undefined | ParticipantDefaultArgs> = $Result.GetResult<Prisma.$ParticipantPayload, S>

  type ParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipantCountAggregateInputType | true
    }

  export interface ParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Participant'], meta: { name: 'Participant' } }
    /**
     * Find zero or one Participant that matches the filter.
     * @param {ParticipantFindUniqueArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipantFindUniqueArgs>(args: SelectSubset<T, ParticipantFindUniqueArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipantFindUniqueOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindFirstArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipantFindFirstArgs>(args?: SelectSubset<T, ParticipantFindFirstArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindFirstOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participants
     * const participants = await prisma.participant.findMany()
     * 
     * // Get first 10 Participants
     * const participants = await prisma.participant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participantWithIdOnly = await prisma.participant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipantFindManyArgs>(args?: SelectSubset<T, ParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participant.
     * @param {ParticipantCreateArgs} args - Arguments to create a Participant.
     * @example
     * // Create one Participant
     * const Participant = await prisma.participant.create({
     *   data: {
     *     // ... data to create a Participant
     *   }
     * })
     * 
     */
    create<T extends ParticipantCreateArgs>(args: SelectSubset<T, ParticipantCreateArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participants.
     * @param {ParticipantCreateManyArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participant = await prisma.participant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipantCreateManyArgs>(args?: SelectSubset<T, ParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Participants and returns the data saved in the database.
     * @param {ParticipantCreateManyAndReturnArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participant = await prisma.participant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Participants and only return the `id`
     * const participantWithIdOnly = await prisma.participant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Participant.
     * @param {ParticipantDeleteArgs} args - Arguments to delete one Participant.
     * @example
     * // Delete one Participant
     * const Participant = await prisma.participant.delete({
     *   where: {
     *     // ... filter to delete one Participant
     *   }
     * })
     * 
     */
    delete<T extends ParticipantDeleteArgs>(args: SelectSubset<T, ParticipantDeleteArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participant.
     * @param {ParticipantUpdateArgs} args - Arguments to update one Participant.
     * @example
     * // Update one Participant
     * const participant = await prisma.participant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipantUpdateArgs>(args: SelectSubset<T, ParticipantUpdateArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participants.
     * @param {ParticipantDeleteManyArgs} args - Arguments to filter Participants to delete.
     * @example
     * // Delete a few Participants
     * const { count } = await prisma.participant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipantDeleteManyArgs>(args?: SelectSubset<T, ParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participants
     * const participant = await prisma.participant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipantUpdateManyArgs>(args: SelectSubset<T, ParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants and returns the data updated in the database.
     * @param {ParticipantUpdateManyAndReturnArgs} args - Arguments to update many Participants.
     * @example
     * // Update many Participants
     * const participant = await prisma.participant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Participants and only return the `id`
     * const participantWithIdOnly = await prisma.participant.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Participant.
     * @param {ParticipantUpsertArgs} args - Arguments to update or create a Participant.
     * @example
     * // Update or create a Participant
     * const participant = await prisma.participant.upsert({
     *   create: {
     *     // ... data to create a Participant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participant we want to update
     *   }
     * })
     */
    upsert<T extends ParticipantUpsertArgs>(args: SelectSubset<T, ParticipantUpsertArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantCountArgs} args - Arguments to filter Participants to count.
     * @example
     * // Count the number of Participants
     * const count = await prisma.participant.count({
     *   where: {
     *     // ... the filter for the Participants we want to count
     *   }
     * })
    **/
    count<T extends ParticipantCountArgs>(
      args?: Subset<T, ParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParticipantAggregateArgs>(args: Subset<T, ParticipantAggregateArgs>): Prisma.PrismaPromise<GetParticipantAggregateType<T>>

    /**
     * Group by Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantGroupByArgs} args - Group by arguments.
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
      T extends ParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipantGroupByArgs['orderBy'] }
        : { orderBy?: ParticipantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Participant model
   */
  readonly fields: ParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Participant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    wishlist<T extends Participant$wishlistArgs<ExtArgs> = {}>(args?: Subset<T, Participant$wishlistArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    giverPairs<T extends Participant$giverPairsArgs<ExtArgs> = {}>(args?: Subset<T, Participant$giverPairsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    takerPairs<T extends Participant$takerPairsArgs<ExtArgs> = {}>(args?: Subset<T, Participant$takerPairsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    giverRestrictions<T extends Participant$giverRestrictionsArgs<ExtArgs> = {}>(args?: Subset<T, Participant$giverRestrictionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestrictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    takerRestrictions<T extends Participant$takerRestrictionsArgs<ExtArgs> = {}>(args?: Subset<T, Participant$takerRestrictionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestrictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Participant model
   */
  interface ParticipantFieldRefs {
    readonly id: FieldRef<"Participant", 'Int'>
    readonly userId: FieldRef<"Participant", 'Int'>
    readonly groupId: FieldRef<"Participant", 'Int'>
    readonly status: FieldRef<"Participant", 'ParticipantStatus'>
    readonly createdAt: FieldRef<"Participant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Participant findUnique
   */
  export type ParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant findUniqueOrThrow
   */
  export type ParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant findFirst
   */
  export type ParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant findFirstOrThrow
   */
  export type ParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant findMany
   */
  export type ParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participants to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant create
   */
  export type ParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a Participant.
     */
    data: XOR<ParticipantCreateInput, ParticipantUncheckedCreateInput>
  }

  /**
   * Participant createMany
   */
  export type ParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Participants.
     */
    data: ParticipantCreateManyInput | ParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Participant createManyAndReturn
   */
  export type ParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many Participants.
     */
    data: ParticipantCreateManyInput | ParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participant update
   */
  export type ParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a Participant.
     */
    data: XOR<ParticipantUpdateInput, ParticipantUncheckedUpdateInput>
    /**
     * Choose, which Participant to update.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant updateMany
   */
  export type ParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Participants.
     */
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyInput>
    /**
     * Filter which Participants to update
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to update.
     */
    limit?: number
  }

  /**
   * Participant updateManyAndReturn
   */
  export type ParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * The data used to update Participants.
     */
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyInput>
    /**
     * Filter which Participants to update
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participant upsert
   */
  export type ParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the Participant to update in case it exists.
     */
    where: ParticipantWhereUniqueInput
    /**
     * In case the Participant found by the `where` argument doesn't exist, create a new Participant with this data.
     */
    create: XOR<ParticipantCreateInput, ParticipantUncheckedCreateInput>
    /**
     * In case the Participant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipantUpdateInput, ParticipantUncheckedUpdateInput>
  }

  /**
   * Participant delete
   */
  export type ParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter which Participant to delete.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant deleteMany
   */
  export type ParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participants to delete
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to delete.
     */
    limit?: number
  }

  /**
   * Participant.wishlist
   */
  export type Participant$wishlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    where?: WishlistWhereInput
  }

  /**
   * Participant.giverPairs
   */
  export type Participant$giverPairsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    where?: PairWhereInput
    orderBy?: PairOrderByWithRelationInput | PairOrderByWithRelationInput[]
    cursor?: PairWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PairScalarFieldEnum | PairScalarFieldEnum[]
  }

  /**
   * Participant.takerPairs
   */
  export type Participant$takerPairsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    where?: PairWhereInput
    orderBy?: PairOrderByWithRelationInput | PairOrderByWithRelationInput[]
    cursor?: PairWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PairScalarFieldEnum | PairScalarFieldEnum[]
  }

  /**
   * Participant.giverRestrictions
   */
  export type Participant$giverRestrictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restriction
     */
    select?: RestrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restriction
     */
    omit?: RestrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestrictionInclude<ExtArgs> | null
    where?: RestrictionWhereInput
    orderBy?: RestrictionOrderByWithRelationInput | RestrictionOrderByWithRelationInput[]
    cursor?: RestrictionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RestrictionScalarFieldEnum | RestrictionScalarFieldEnum[]
  }

  /**
   * Participant.takerRestrictions
   */
  export type Participant$takerRestrictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restriction
     */
    select?: RestrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restriction
     */
    omit?: RestrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestrictionInclude<ExtArgs> | null
    where?: RestrictionWhereInput
    orderBy?: RestrictionOrderByWithRelationInput | RestrictionOrderByWithRelationInput[]
    cursor?: RestrictionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RestrictionScalarFieldEnum | RestrictionScalarFieldEnum[]
  }

  /**
   * Participant without action
   */
  export type ParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
  }


  /**
   * Model Wishlist
   */

  export type AggregateWishlist = {
    _count: WishlistCountAggregateOutputType | null
    _avg: WishlistAvgAggregateOutputType | null
    _sum: WishlistSumAggregateOutputType | null
    _min: WishlistMinAggregateOutputType | null
    _max: WishlistMaxAggregateOutputType | null
  }

  export type WishlistAvgAggregateOutputType = {
    id: number | null
    participantId: number | null
  }

  export type WishlistSumAggregateOutputType = {
    id: number | null
    participantId: number | null
  }

  export type WishlistMinAggregateOutputType = {
    id: number | null
    participantId: number | null
    updatedAt: Date | null
  }

  export type WishlistMaxAggregateOutputType = {
    id: number | null
    participantId: number | null
    updatedAt: Date | null
  }

  export type WishlistCountAggregateOutputType = {
    id: number
    participantId: number
    items: number
    updatedAt: number
    _all: number
  }


  export type WishlistAvgAggregateInputType = {
    id?: true
    participantId?: true
  }

  export type WishlistSumAggregateInputType = {
    id?: true
    participantId?: true
  }

  export type WishlistMinAggregateInputType = {
    id?: true
    participantId?: true
    updatedAt?: true
  }

  export type WishlistMaxAggregateInputType = {
    id?: true
    participantId?: true
    updatedAt?: true
  }

  export type WishlistCountAggregateInputType = {
    id?: true
    participantId?: true
    items?: true
    updatedAt?: true
    _all?: true
  }

  export type WishlistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wishlist to aggregate.
     */
    where?: WishlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wishlists to fetch.
     */
    orderBy?: WishlistOrderByWithRelationInput | WishlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WishlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wishlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wishlists
    **/
    _count?: true | WishlistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WishlistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WishlistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WishlistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WishlistMaxAggregateInputType
  }

  export type GetWishlistAggregateType<T extends WishlistAggregateArgs> = {
        [P in keyof T & keyof AggregateWishlist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWishlist[P]>
      : GetScalarType<T[P], AggregateWishlist[P]>
  }




  export type WishlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WishlistWhereInput
    orderBy?: WishlistOrderByWithAggregationInput | WishlistOrderByWithAggregationInput[]
    by: WishlistScalarFieldEnum[] | WishlistScalarFieldEnum
    having?: WishlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WishlistCountAggregateInputType | true
    _avg?: WishlistAvgAggregateInputType
    _sum?: WishlistSumAggregateInputType
    _min?: WishlistMinAggregateInputType
    _max?: WishlistMaxAggregateInputType
  }

  export type WishlistGroupByOutputType = {
    id: number
    participantId: number
    items: JsonValue
    updatedAt: Date
    _count: WishlistCountAggregateOutputType | null
    _avg: WishlistAvgAggregateOutputType | null
    _sum: WishlistSumAggregateOutputType | null
    _min: WishlistMinAggregateOutputType | null
    _max: WishlistMaxAggregateOutputType | null
  }

  type GetWishlistGroupByPayload<T extends WishlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WishlistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WishlistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WishlistGroupByOutputType[P]>
            : GetScalarType<T[P], WishlistGroupByOutputType[P]>
        }
      >
    >


  export type WishlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participantId?: boolean
    items?: boolean
    updatedAt?: boolean
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wishlist"]>

  export type WishlistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participantId?: boolean
    items?: boolean
    updatedAt?: boolean
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wishlist"]>

  export type WishlistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participantId?: boolean
    items?: boolean
    updatedAt?: boolean
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wishlist"]>

  export type WishlistSelectScalar = {
    id?: boolean
    participantId?: boolean
    items?: boolean
    updatedAt?: boolean
  }

  export type WishlistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "participantId" | "items" | "updatedAt", ExtArgs["result"]["wishlist"]>
  export type WishlistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }
  export type WishlistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }
  export type WishlistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }

  export type $WishlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wishlist"
    objects: {
      participant: Prisma.$ParticipantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      participantId: number
      items: Prisma.JsonValue
      updatedAt: Date
    }, ExtArgs["result"]["wishlist"]>
    composites: {}
  }

  type WishlistGetPayload<S extends boolean | null | undefined | WishlistDefaultArgs> = $Result.GetResult<Prisma.$WishlistPayload, S>

  type WishlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WishlistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WishlistCountAggregateInputType | true
    }

  export interface WishlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wishlist'], meta: { name: 'Wishlist' } }
    /**
     * Find zero or one Wishlist that matches the filter.
     * @param {WishlistFindUniqueArgs} args - Arguments to find a Wishlist
     * @example
     * // Get one Wishlist
     * const wishlist = await prisma.wishlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WishlistFindUniqueArgs>(args: SelectSubset<T, WishlistFindUniqueArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wishlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WishlistFindUniqueOrThrowArgs} args - Arguments to find a Wishlist
     * @example
     * // Get one Wishlist
     * const wishlist = await prisma.wishlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WishlistFindUniqueOrThrowArgs>(args: SelectSubset<T, WishlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wishlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistFindFirstArgs} args - Arguments to find a Wishlist
     * @example
     * // Get one Wishlist
     * const wishlist = await prisma.wishlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WishlistFindFirstArgs>(args?: SelectSubset<T, WishlistFindFirstArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wishlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistFindFirstOrThrowArgs} args - Arguments to find a Wishlist
     * @example
     * // Get one Wishlist
     * const wishlist = await prisma.wishlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WishlistFindFirstOrThrowArgs>(args?: SelectSubset<T, WishlistFindFirstOrThrowArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wishlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wishlists
     * const wishlists = await prisma.wishlist.findMany()
     * 
     * // Get first 10 Wishlists
     * const wishlists = await prisma.wishlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wishlistWithIdOnly = await prisma.wishlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WishlistFindManyArgs>(args?: SelectSubset<T, WishlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wishlist.
     * @param {WishlistCreateArgs} args - Arguments to create a Wishlist.
     * @example
     * // Create one Wishlist
     * const Wishlist = await prisma.wishlist.create({
     *   data: {
     *     // ... data to create a Wishlist
     *   }
     * })
     * 
     */
    create<T extends WishlistCreateArgs>(args: SelectSubset<T, WishlistCreateArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wishlists.
     * @param {WishlistCreateManyArgs} args - Arguments to create many Wishlists.
     * @example
     * // Create many Wishlists
     * const wishlist = await prisma.wishlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WishlistCreateManyArgs>(args?: SelectSubset<T, WishlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wishlists and returns the data saved in the database.
     * @param {WishlistCreateManyAndReturnArgs} args - Arguments to create many Wishlists.
     * @example
     * // Create many Wishlists
     * const wishlist = await prisma.wishlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wishlists and only return the `id`
     * const wishlistWithIdOnly = await prisma.wishlist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WishlistCreateManyAndReturnArgs>(args?: SelectSubset<T, WishlistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wishlist.
     * @param {WishlistDeleteArgs} args - Arguments to delete one Wishlist.
     * @example
     * // Delete one Wishlist
     * const Wishlist = await prisma.wishlist.delete({
     *   where: {
     *     // ... filter to delete one Wishlist
     *   }
     * })
     * 
     */
    delete<T extends WishlistDeleteArgs>(args: SelectSubset<T, WishlistDeleteArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wishlist.
     * @param {WishlistUpdateArgs} args - Arguments to update one Wishlist.
     * @example
     * // Update one Wishlist
     * const wishlist = await prisma.wishlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WishlistUpdateArgs>(args: SelectSubset<T, WishlistUpdateArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wishlists.
     * @param {WishlistDeleteManyArgs} args - Arguments to filter Wishlists to delete.
     * @example
     * // Delete a few Wishlists
     * const { count } = await prisma.wishlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WishlistDeleteManyArgs>(args?: SelectSubset<T, WishlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wishlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wishlists
     * const wishlist = await prisma.wishlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WishlistUpdateManyArgs>(args: SelectSubset<T, WishlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wishlists and returns the data updated in the database.
     * @param {WishlistUpdateManyAndReturnArgs} args - Arguments to update many Wishlists.
     * @example
     * // Update many Wishlists
     * const wishlist = await prisma.wishlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wishlists and only return the `id`
     * const wishlistWithIdOnly = await prisma.wishlist.updateManyAndReturn({
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
    updateManyAndReturn<T extends WishlistUpdateManyAndReturnArgs>(args: SelectSubset<T, WishlistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wishlist.
     * @param {WishlistUpsertArgs} args - Arguments to update or create a Wishlist.
     * @example
     * // Update or create a Wishlist
     * const wishlist = await prisma.wishlist.upsert({
     *   create: {
     *     // ... data to create a Wishlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wishlist we want to update
     *   }
     * })
     */
    upsert<T extends WishlistUpsertArgs>(args: SelectSubset<T, WishlistUpsertArgs<ExtArgs>>): Prisma__WishlistClient<$Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wishlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistCountArgs} args - Arguments to filter Wishlists to count.
     * @example
     * // Count the number of Wishlists
     * const count = await prisma.wishlist.count({
     *   where: {
     *     // ... the filter for the Wishlists we want to count
     *   }
     * })
    **/
    count<T extends WishlistCountArgs>(
      args?: Subset<T, WishlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WishlistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wishlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WishlistAggregateArgs>(args: Subset<T, WishlistAggregateArgs>): Prisma.PrismaPromise<GetWishlistAggregateType<T>>

    /**
     * Group by Wishlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistGroupByArgs} args - Group by arguments.
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
      T extends WishlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WishlistGroupByArgs['orderBy'] }
        : { orderBy?: WishlistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WishlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWishlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wishlist model
   */
  readonly fields: WishlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wishlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WishlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participant<T extends ParticipantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantDefaultArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Wishlist model
   */
  interface WishlistFieldRefs {
    readonly id: FieldRef<"Wishlist", 'Int'>
    readonly participantId: FieldRef<"Wishlist", 'Int'>
    readonly items: FieldRef<"Wishlist", 'Json'>
    readonly updatedAt: FieldRef<"Wishlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Wishlist findUnique
   */
  export type WishlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * Filter, which Wishlist to fetch.
     */
    where: WishlistWhereUniqueInput
  }

  /**
   * Wishlist findUniqueOrThrow
   */
  export type WishlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * Filter, which Wishlist to fetch.
     */
    where: WishlistWhereUniqueInput
  }

  /**
   * Wishlist findFirst
   */
  export type WishlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * Filter, which Wishlist to fetch.
     */
    where?: WishlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wishlists to fetch.
     */
    orderBy?: WishlistOrderByWithRelationInput | WishlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wishlists.
     */
    cursor?: WishlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wishlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wishlists.
     */
    distinct?: WishlistScalarFieldEnum | WishlistScalarFieldEnum[]
  }

  /**
   * Wishlist findFirstOrThrow
   */
  export type WishlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * Filter, which Wishlist to fetch.
     */
    where?: WishlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wishlists to fetch.
     */
    orderBy?: WishlistOrderByWithRelationInput | WishlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wishlists.
     */
    cursor?: WishlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wishlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wishlists.
     */
    distinct?: WishlistScalarFieldEnum | WishlistScalarFieldEnum[]
  }

  /**
   * Wishlist findMany
   */
  export type WishlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * Filter, which Wishlists to fetch.
     */
    where?: WishlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wishlists to fetch.
     */
    orderBy?: WishlistOrderByWithRelationInput | WishlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wishlists.
     */
    cursor?: WishlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wishlists.
     */
    skip?: number
    distinct?: WishlistScalarFieldEnum | WishlistScalarFieldEnum[]
  }

  /**
   * Wishlist create
   */
  export type WishlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * The data needed to create a Wishlist.
     */
    data: XOR<WishlistCreateInput, WishlistUncheckedCreateInput>
  }

  /**
   * Wishlist createMany
   */
  export type WishlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wishlists.
     */
    data: WishlistCreateManyInput | WishlistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wishlist createManyAndReturn
   */
  export type WishlistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * The data used to create many Wishlists.
     */
    data: WishlistCreateManyInput | WishlistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wishlist update
   */
  export type WishlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * The data needed to update a Wishlist.
     */
    data: XOR<WishlistUpdateInput, WishlistUncheckedUpdateInput>
    /**
     * Choose, which Wishlist to update.
     */
    where: WishlistWhereUniqueInput
  }

  /**
   * Wishlist updateMany
   */
  export type WishlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wishlists.
     */
    data: XOR<WishlistUpdateManyMutationInput, WishlistUncheckedUpdateManyInput>
    /**
     * Filter which Wishlists to update
     */
    where?: WishlistWhereInput
    /**
     * Limit how many Wishlists to update.
     */
    limit?: number
  }

  /**
   * Wishlist updateManyAndReturn
   */
  export type WishlistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * The data used to update Wishlists.
     */
    data: XOR<WishlistUpdateManyMutationInput, WishlistUncheckedUpdateManyInput>
    /**
     * Filter which Wishlists to update
     */
    where?: WishlistWhereInput
    /**
     * Limit how many Wishlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wishlist upsert
   */
  export type WishlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * The filter to search for the Wishlist to update in case it exists.
     */
    where: WishlistWhereUniqueInput
    /**
     * In case the Wishlist found by the `where` argument doesn't exist, create a new Wishlist with this data.
     */
    create: XOR<WishlistCreateInput, WishlistUncheckedCreateInput>
    /**
     * In case the Wishlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WishlistUpdateInput, WishlistUncheckedUpdateInput>
  }

  /**
   * Wishlist delete
   */
  export type WishlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
    /**
     * Filter which Wishlist to delete.
     */
    where: WishlistWhereUniqueInput
  }

  /**
   * Wishlist deleteMany
   */
  export type WishlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wishlists to delete
     */
    where?: WishlistWhereInput
    /**
     * Limit how many Wishlists to delete.
     */
    limit?: number
  }

  /**
   * Wishlist without action
   */
  export type WishlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist
     */
    select?: WishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlist
     */
    omit?: WishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistInclude<ExtArgs> | null
  }


  /**
   * Model Restriction
   */

  export type AggregateRestriction = {
    _count: RestrictionCountAggregateOutputType | null
    _avg: RestrictionAvgAggregateOutputType | null
    _sum: RestrictionSumAggregateOutputType | null
    _min: RestrictionMinAggregateOutputType | null
    _max: RestrictionMaxAggregateOutputType | null
  }

  export type RestrictionAvgAggregateOutputType = {
    id: number | null
    groupId: number | null
    blockedGiverId: number | null
    blockedTakerId: number | null
  }

  export type RestrictionSumAggregateOutputType = {
    id: number | null
    groupId: number | null
    blockedGiverId: number | null
    blockedTakerId: number | null
  }

  export type RestrictionMinAggregateOutputType = {
    id: number | null
    groupId: number | null
    blockedGiverId: number | null
    blockedTakerId: number | null
  }

  export type RestrictionMaxAggregateOutputType = {
    id: number | null
    groupId: number | null
    blockedGiverId: number | null
    blockedTakerId: number | null
  }

  export type RestrictionCountAggregateOutputType = {
    id: number
    groupId: number
    blockedGiverId: number
    blockedTakerId: number
    _all: number
  }


  export type RestrictionAvgAggregateInputType = {
    id?: true
    groupId?: true
    blockedGiverId?: true
    blockedTakerId?: true
  }

  export type RestrictionSumAggregateInputType = {
    id?: true
    groupId?: true
    blockedGiverId?: true
    blockedTakerId?: true
  }

  export type RestrictionMinAggregateInputType = {
    id?: true
    groupId?: true
    blockedGiverId?: true
    blockedTakerId?: true
  }

  export type RestrictionMaxAggregateInputType = {
    id?: true
    groupId?: true
    blockedGiverId?: true
    blockedTakerId?: true
  }

  export type RestrictionCountAggregateInputType = {
    id?: true
    groupId?: true
    blockedGiverId?: true
    blockedTakerId?: true
    _all?: true
  }

  export type RestrictionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restriction to aggregate.
     */
    where?: RestrictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restrictions to fetch.
     */
    orderBy?: RestrictionOrderByWithRelationInput | RestrictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestrictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restrictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restrictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Restrictions
    **/
    _count?: true | RestrictionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestrictionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestrictionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestrictionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestrictionMaxAggregateInputType
  }

  export type GetRestrictionAggregateType<T extends RestrictionAggregateArgs> = {
        [P in keyof T & keyof AggregateRestriction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestriction[P]>
      : GetScalarType<T[P], AggregateRestriction[P]>
  }




  export type RestrictionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestrictionWhereInput
    orderBy?: RestrictionOrderByWithAggregationInput | RestrictionOrderByWithAggregationInput[]
    by: RestrictionScalarFieldEnum[] | RestrictionScalarFieldEnum
    having?: RestrictionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestrictionCountAggregateInputType | true
    _avg?: RestrictionAvgAggregateInputType
    _sum?: RestrictionSumAggregateInputType
    _min?: RestrictionMinAggregateInputType
    _max?: RestrictionMaxAggregateInputType
  }

  export type RestrictionGroupByOutputType = {
    id: number
    groupId: number
    blockedGiverId: number
    blockedTakerId: number
    _count: RestrictionCountAggregateOutputType | null
    _avg: RestrictionAvgAggregateOutputType | null
    _sum: RestrictionSumAggregateOutputType | null
    _min: RestrictionMinAggregateOutputType | null
    _max: RestrictionMaxAggregateOutputType | null
  }

  type GetRestrictionGroupByPayload<T extends RestrictionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestrictionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestrictionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestrictionGroupByOutputType[P]>
            : GetScalarType<T[P], RestrictionGroupByOutputType[P]>
        }
      >
    >


  export type RestrictionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    blockedGiverId?: boolean
    blockedTakerId?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    giver?: boolean | ParticipantDefaultArgs<ExtArgs>
    taker?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restriction"]>

  export type RestrictionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    blockedGiverId?: boolean
    blockedTakerId?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    giver?: boolean | ParticipantDefaultArgs<ExtArgs>
    taker?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restriction"]>

  export type RestrictionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    blockedGiverId?: boolean
    blockedTakerId?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    giver?: boolean | ParticipantDefaultArgs<ExtArgs>
    taker?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restriction"]>

  export type RestrictionSelectScalar = {
    id?: boolean
    groupId?: boolean
    blockedGiverId?: boolean
    blockedTakerId?: boolean
  }

  export type RestrictionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "blockedGiverId" | "blockedTakerId", ExtArgs["result"]["restriction"]>
  export type RestrictionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    giver?: boolean | ParticipantDefaultArgs<ExtArgs>
    taker?: boolean | ParticipantDefaultArgs<ExtArgs>
  }
  export type RestrictionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    giver?: boolean | ParticipantDefaultArgs<ExtArgs>
    taker?: boolean | ParticipantDefaultArgs<ExtArgs>
  }
  export type RestrictionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    giver?: boolean | ParticipantDefaultArgs<ExtArgs>
    taker?: boolean | ParticipantDefaultArgs<ExtArgs>
  }

  export type $RestrictionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Restriction"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      giver: Prisma.$ParticipantPayload<ExtArgs>
      taker: Prisma.$ParticipantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      groupId: number
      blockedGiverId: number
      blockedTakerId: number
    }, ExtArgs["result"]["restriction"]>
    composites: {}
  }

  type RestrictionGetPayload<S extends boolean | null | undefined | RestrictionDefaultArgs> = $Result.GetResult<Prisma.$RestrictionPayload, S>

  type RestrictionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RestrictionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestrictionCountAggregateInputType | true
    }

  export interface RestrictionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Restriction'], meta: { name: 'Restriction' } }
    /**
     * Find zero or one Restriction that matches the filter.
     * @param {RestrictionFindUniqueArgs} args - Arguments to find a Restriction
     * @example
     * // Get one Restriction
     * const restriction = await prisma.restriction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestrictionFindUniqueArgs>(args: SelectSubset<T, RestrictionFindUniqueArgs<ExtArgs>>): Prisma__RestrictionClient<$Result.GetResult<Prisma.$RestrictionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Restriction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestrictionFindUniqueOrThrowArgs} args - Arguments to find a Restriction
     * @example
     * // Get one Restriction
     * const restriction = await prisma.restriction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestrictionFindUniqueOrThrowArgs>(args: SelectSubset<T, RestrictionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestrictionClient<$Result.GetResult<Prisma.$RestrictionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restriction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestrictionFindFirstArgs} args - Arguments to find a Restriction
     * @example
     * // Get one Restriction
     * const restriction = await prisma.restriction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestrictionFindFirstArgs>(args?: SelectSubset<T, RestrictionFindFirstArgs<ExtArgs>>): Prisma__RestrictionClient<$Result.GetResult<Prisma.$RestrictionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restriction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestrictionFindFirstOrThrowArgs} args - Arguments to find a Restriction
     * @example
     * // Get one Restriction
     * const restriction = await prisma.restriction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestrictionFindFirstOrThrowArgs>(args?: SelectSubset<T, RestrictionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestrictionClient<$Result.GetResult<Prisma.$RestrictionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Restrictions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestrictionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restrictions
     * const restrictions = await prisma.restriction.findMany()
     * 
     * // Get first 10 Restrictions
     * const restrictions = await prisma.restriction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restrictionWithIdOnly = await prisma.restriction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestrictionFindManyArgs>(args?: SelectSubset<T, RestrictionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestrictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Restriction.
     * @param {RestrictionCreateArgs} args - Arguments to create a Restriction.
     * @example
     * // Create one Restriction
     * const Restriction = await prisma.restriction.create({
     *   data: {
     *     // ... data to create a Restriction
     *   }
     * })
     * 
     */
    create<T extends RestrictionCreateArgs>(args: SelectSubset<T, RestrictionCreateArgs<ExtArgs>>): Prisma__RestrictionClient<$Result.GetResult<Prisma.$RestrictionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Restrictions.
     * @param {RestrictionCreateManyArgs} args - Arguments to create many Restrictions.
     * @example
     * // Create many Restrictions
     * const restriction = await prisma.restriction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestrictionCreateManyArgs>(args?: SelectSubset<T, RestrictionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Restrictions and returns the data saved in the database.
     * @param {RestrictionCreateManyAndReturnArgs} args - Arguments to create many Restrictions.
     * @example
     * // Create many Restrictions
     * const restriction = await prisma.restriction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Restrictions and only return the `id`
     * const restrictionWithIdOnly = await prisma.restriction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RestrictionCreateManyAndReturnArgs>(args?: SelectSubset<T, RestrictionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestrictionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Restriction.
     * @param {RestrictionDeleteArgs} args - Arguments to delete one Restriction.
     * @example
     * // Delete one Restriction
     * const Restriction = await prisma.restriction.delete({
     *   where: {
     *     // ... filter to delete one Restriction
     *   }
     * })
     * 
     */
    delete<T extends RestrictionDeleteArgs>(args: SelectSubset<T, RestrictionDeleteArgs<ExtArgs>>): Prisma__RestrictionClient<$Result.GetResult<Prisma.$RestrictionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Restriction.
     * @param {RestrictionUpdateArgs} args - Arguments to update one Restriction.
     * @example
     * // Update one Restriction
     * const restriction = await prisma.restriction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestrictionUpdateArgs>(args: SelectSubset<T, RestrictionUpdateArgs<ExtArgs>>): Prisma__RestrictionClient<$Result.GetResult<Prisma.$RestrictionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Restrictions.
     * @param {RestrictionDeleteManyArgs} args - Arguments to filter Restrictions to delete.
     * @example
     * // Delete a few Restrictions
     * const { count } = await prisma.restriction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestrictionDeleteManyArgs>(args?: SelectSubset<T, RestrictionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restrictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestrictionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restrictions
     * const restriction = await prisma.restriction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestrictionUpdateManyArgs>(args: SelectSubset<T, RestrictionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restrictions and returns the data updated in the database.
     * @param {RestrictionUpdateManyAndReturnArgs} args - Arguments to update many Restrictions.
     * @example
     * // Update many Restrictions
     * const restriction = await prisma.restriction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Restrictions and only return the `id`
     * const restrictionWithIdOnly = await prisma.restriction.updateManyAndReturn({
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
    updateManyAndReturn<T extends RestrictionUpdateManyAndReturnArgs>(args: SelectSubset<T, RestrictionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestrictionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Restriction.
     * @param {RestrictionUpsertArgs} args - Arguments to update or create a Restriction.
     * @example
     * // Update or create a Restriction
     * const restriction = await prisma.restriction.upsert({
     *   create: {
     *     // ... data to create a Restriction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restriction we want to update
     *   }
     * })
     */
    upsert<T extends RestrictionUpsertArgs>(args: SelectSubset<T, RestrictionUpsertArgs<ExtArgs>>): Prisma__RestrictionClient<$Result.GetResult<Prisma.$RestrictionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Restrictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestrictionCountArgs} args - Arguments to filter Restrictions to count.
     * @example
     * // Count the number of Restrictions
     * const count = await prisma.restriction.count({
     *   where: {
     *     // ... the filter for the Restrictions we want to count
     *   }
     * })
    **/
    count<T extends RestrictionCountArgs>(
      args?: Subset<T, RestrictionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestrictionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restriction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestrictionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RestrictionAggregateArgs>(args: Subset<T, RestrictionAggregateArgs>): Prisma.PrismaPromise<GetRestrictionAggregateType<T>>

    /**
     * Group by Restriction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestrictionGroupByArgs} args - Group by arguments.
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
      T extends RestrictionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestrictionGroupByArgs['orderBy'] }
        : { orderBy?: RestrictionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RestrictionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestrictionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Restriction model
   */
  readonly fields: RestrictionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Restriction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestrictionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    giver<T extends ParticipantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantDefaultArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    taker<T extends ParticipantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantDefaultArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Restriction model
   */
  interface RestrictionFieldRefs {
    readonly id: FieldRef<"Restriction", 'Int'>
    readonly groupId: FieldRef<"Restriction", 'Int'>
    readonly blockedGiverId: FieldRef<"Restriction", 'Int'>
    readonly blockedTakerId: FieldRef<"Restriction", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Restriction findUnique
   */
  export type RestrictionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restriction
     */
    select?: RestrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restriction
     */
    omit?: RestrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestrictionInclude<ExtArgs> | null
    /**
     * Filter, which Restriction to fetch.
     */
    where: RestrictionWhereUniqueInput
  }

  /**
   * Restriction findUniqueOrThrow
   */
  export type RestrictionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restriction
     */
    select?: RestrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restriction
     */
    omit?: RestrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestrictionInclude<ExtArgs> | null
    /**
     * Filter, which Restriction to fetch.
     */
    where: RestrictionWhereUniqueInput
  }

  /**
   * Restriction findFirst
   */
  export type RestrictionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restriction
     */
    select?: RestrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restriction
     */
    omit?: RestrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestrictionInclude<ExtArgs> | null
    /**
     * Filter, which Restriction to fetch.
     */
    where?: RestrictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restrictions to fetch.
     */
    orderBy?: RestrictionOrderByWithRelationInput | RestrictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restrictions.
     */
    cursor?: RestrictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restrictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restrictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restrictions.
     */
    distinct?: RestrictionScalarFieldEnum | RestrictionScalarFieldEnum[]
  }

  /**
   * Restriction findFirstOrThrow
   */
  export type RestrictionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restriction
     */
    select?: RestrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restriction
     */
    omit?: RestrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestrictionInclude<ExtArgs> | null
    /**
     * Filter, which Restriction to fetch.
     */
    where?: RestrictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restrictions to fetch.
     */
    orderBy?: RestrictionOrderByWithRelationInput | RestrictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restrictions.
     */
    cursor?: RestrictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restrictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restrictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restrictions.
     */
    distinct?: RestrictionScalarFieldEnum | RestrictionScalarFieldEnum[]
  }

  /**
   * Restriction findMany
   */
  export type RestrictionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restriction
     */
    select?: RestrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restriction
     */
    omit?: RestrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestrictionInclude<ExtArgs> | null
    /**
     * Filter, which Restrictions to fetch.
     */
    where?: RestrictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restrictions to fetch.
     */
    orderBy?: RestrictionOrderByWithRelationInput | RestrictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Restrictions.
     */
    cursor?: RestrictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restrictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restrictions.
     */
    skip?: number
    distinct?: RestrictionScalarFieldEnum | RestrictionScalarFieldEnum[]
  }

  /**
   * Restriction create
   */
  export type RestrictionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restriction
     */
    select?: RestrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restriction
     */
    omit?: RestrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestrictionInclude<ExtArgs> | null
    /**
     * The data needed to create a Restriction.
     */
    data: XOR<RestrictionCreateInput, RestrictionUncheckedCreateInput>
  }

  /**
   * Restriction createMany
   */
  export type RestrictionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Restrictions.
     */
    data: RestrictionCreateManyInput | RestrictionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Restriction createManyAndReturn
   */
  export type RestrictionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restriction
     */
    select?: RestrictionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Restriction
     */
    omit?: RestrictionOmit<ExtArgs> | null
    /**
     * The data used to create many Restrictions.
     */
    data: RestrictionCreateManyInput | RestrictionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestrictionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Restriction update
   */
  export type RestrictionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restriction
     */
    select?: RestrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restriction
     */
    omit?: RestrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestrictionInclude<ExtArgs> | null
    /**
     * The data needed to update a Restriction.
     */
    data: XOR<RestrictionUpdateInput, RestrictionUncheckedUpdateInput>
    /**
     * Choose, which Restriction to update.
     */
    where: RestrictionWhereUniqueInput
  }

  /**
   * Restriction updateMany
   */
  export type RestrictionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Restrictions.
     */
    data: XOR<RestrictionUpdateManyMutationInput, RestrictionUncheckedUpdateManyInput>
    /**
     * Filter which Restrictions to update
     */
    where?: RestrictionWhereInput
    /**
     * Limit how many Restrictions to update.
     */
    limit?: number
  }

  /**
   * Restriction updateManyAndReturn
   */
  export type RestrictionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restriction
     */
    select?: RestrictionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Restriction
     */
    omit?: RestrictionOmit<ExtArgs> | null
    /**
     * The data used to update Restrictions.
     */
    data: XOR<RestrictionUpdateManyMutationInput, RestrictionUncheckedUpdateManyInput>
    /**
     * Filter which Restrictions to update
     */
    where?: RestrictionWhereInput
    /**
     * Limit how many Restrictions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestrictionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Restriction upsert
   */
  export type RestrictionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restriction
     */
    select?: RestrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restriction
     */
    omit?: RestrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestrictionInclude<ExtArgs> | null
    /**
     * The filter to search for the Restriction to update in case it exists.
     */
    where: RestrictionWhereUniqueInput
    /**
     * In case the Restriction found by the `where` argument doesn't exist, create a new Restriction with this data.
     */
    create: XOR<RestrictionCreateInput, RestrictionUncheckedCreateInput>
    /**
     * In case the Restriction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestrictionUpdateInput, RestrictionUncheckedUpdateInput>
  }

  /**
   * Restriction delete
   */
  export type RestrictionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restriction
     */
    select?: RestrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restriction
     */
    omit?: RestrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestrictionInclude<ExtArgs> | null
    /**
     * Filter which Restriction to delete.
     */
    where: RestrictionWhereUniqueInput
  }

  /**
   * Restriction deleteMany
   */
  export type RestrictionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restrictions to delete
     */
    where?: RestrictionWhereInput
    /**
     * Limit how many Restrictions to delete.
     */
    limit?: number
  }

  /**
   * Restriction without action
   */
  export type RestrictionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restriction
     */
    select?: RestrictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restriction
     */
    omit?: RestrictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestrictionInclude<ExtArgs> | null
  }


  /**
   * Model DrawResult
   */

  export type AggregateDrawResult = {
    _count: DrawResultCountAggregateOutputType | null
    _avg: DrawResultAvgAggregateOutputType | null
    _sum: DrawResultSumAggregateOutputType | null
    _min: DrawResultMinAggregateOutputType | null
    _max: DrawResultMaxAggregateOutputType | null
  }

  export type DrawResultAvgAggregateOutputType = {
    id: number | null
    groupId: number | null
  }

  export type DrawResultSumAggregateOutputType = {
    id: number | null
    groupId: number | null
  }

  export type DrawResultMinAggregateOutputType = {
    id: number | null
    groupId: number | null
    createdAt: Date | null
  }

  export type DrawResultMaxAggregateOutputType = {
    id: number | null
    groupId: number | null
    createdAt: Date | null
  }

  export type DrawResultCountAggregateOutputType = {
    id: number
    groupId: number
    createdAt: number
    _all: number
  }


  export type DrawResultAvgAggregateInputType = {
    id?: true
    groupId?: true
  }

  export type DrawResultSumAggregateInputType = {
    id?: true
    groupId?: true
  }

  export type DrawResultMinAggregateInputType = {
    id?: true
    groupId?: true
    createdAt?: true
  }

  export type DrawResultMaxAggregateInputType = {
    id?: true
    groupId?: true
    createdAt?: true
  }

  export type DrawResultCountAggregateInputType = {
    id?: true
    groupId?: true
    createdAt?: true
    _all?: true
  }

  export type DrawResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DrawResult to aggregate.
     */
    where?: DrawResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrawResults to fetch.
     */
    orderBy?: DrawResultOrderByWithRelationInput | DrawResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DrawResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrawResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrawResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DrawResults
    **/
    _count?: true | DrawResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DrawResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DrawResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DrawResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DrawResultMaxAggregateInputType
  }

  export type GetDrawResultAggregateType<T extends DrawResultAggregateArgs> = {
        [P in keyof T & keyof AggregateDrawResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrawResult[P]>
      : GetScalarType<T[P], AggregateDrawResult[P]>
  }




  export type DrawResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrawResultWhereInput
    orderBy?: DrawResultOrderByWithAggregationInput | DrawResultOrderByWithAggregationInput[]
    by: DrawResultScalarFieldEnum[] | DrawResultScalarFieldEnum
    having?: DrawResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DrawResultCountAggregateInputType | true
    _avg?: DrawResultAvgAggregateInputType
    _sum?: DrawResultSumAggregateInputType
    _min?: DrawResultMinAggregateInputType
    _max?: DrawResultMaxAggregateInputType
  }

  export type DrawResultGroupByOutputType = {
    id: number
    groupId: number
    createdAt: Date
    _count: DrawResultCountAggregateOutputType | null
    _avg: DrawResultAvgAggregateOutputType | null
    _sum: DrawResultSumAggregateOutputType | null
    _min: DrawResultMinAggregateOutputType | null
    _max: DrawResultMaxAggregateOutputType | null
  }

  type GetDrawResultGroupByPayload<T extends DrawResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DrawResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DrawResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DrawResultGroupByOutputType[P]>
            : GetScalarType<T[P], DrawResultGroupByOutputType[P]>
        }
      >
    >


  export type DrawResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    createdAt?: boolean
    pairs?: boolean | DrawResult$pairsArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
    _count?: boolean | DrawResultCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drawResult"]>

  export type DrawResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    createdAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drawResult"]>

  export type DrawResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    createdAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drawResult"]>

  export type DrawResultSelectScalar = {
    id?: boolean
    groupId?: boolean
    createdAt?: boolean
  }

  export type DrawResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "createdAt", ExtArgs["result"]["drawResult"]>
  export type DrawResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pairs?: boolean | DrawResult$pairsArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
    _count?: boolean | DrawResultCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DrawResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type DrawResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }

  export type $DrawResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DrawResult"
    objects: {
      pairs: Prisma.$PairPayload<ExtArgs>[]
      group: Prisma.$GroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      groupId: number
      createdAt: Date
    }, ExtArgs["result"]["drawResult"]>
    composites: {}
  }

  type DrawResultGetPayload<S extends boolean | null | undefined | DrawResultDefaultArgs> = $Result.GetResult<Prisma.$DrawResultPayload, S>

  type DrawResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DrawResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DrawResultCountAggregateInputType | true
    }

  export interface DrawResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DrawResult'], meta: { name: 'DrawResult' } }
    /**
     * Find zero or one DrawResult that matches the filter.
     * @param {DrawResultFindUniqueArgs} args - Arguments to find a DrawResult
     * @example
     * // Get one DrawResult
     * const drawResult = await prisma.drawResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DrawResultFindUniqueArgs>(args: SelectSubset<T, DrawResultFindUniqueArgs<ExtArgs>>): Prisma__DrawResultClient<$Result.GetResult<Prisma.$DrawResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DrawResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DrawResultFindUniqueOrThrowArgs} args - Arguments to find a DrawResult
     * @example
     * // Get one DrawResult
     * const drawResult = await prisma.drawResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DrawResultFindUniqueOrThrowArgs>(args: SelectSubset<T, DrawResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DrawResultClient<$Result.GetResult<Prisma.$DrawResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DrawResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawResultFindFirstArgs} args - Arguments to find a DrawResult
     * @example
     * // Get one DrawResult
     * const drawResult = await prisma.drawResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DrawResultFindFirstArgs>(args?: SelectSubset<T, DrawResultFindFirstArgs<ExtArgs>>): Prisma__DrawResultClient<$Result.GetResult<Prisma.$DrawResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DrawResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawResultFindFirstOrThrowArgs} args - Arguments to find a DrawResult
     * @example
     * // Get one DrawResult
     * const drawResult = await prisma.drawResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DrawResultFindFirstOrThrowArgs>(args?: SelectSubset<T, DrawResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__DrawResultClient<$Result.GetResult<Prisma.$DrawResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DrawResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DrawResults
     * const drawResults = await prisma.drawResult.findMany()
     * 
     * // Get first 10 DrawResults
     * const drawResults = await prisma.drawResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const drawResultWithIdOnly = await prisma.drawResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DrawResultFindManyArgs>(args?: SelectSubset<T, DrawResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DrawResult.
     * @param {DrawResultCreateArgs} args - Arguments to create a DrawResult.
     * @example
     * // Create one DrawResult
     * const DrawResult = await prisma.drawResult.create({
     *   data: {
     *     // ... data to create a DrawResult
     *   }
     * })
     * 
     */
    create<T extends DrawResultCreateArgs>(args: SelectSubset<T, DrawResultCreateArgs<ExtArgs>>): Prisma__DrawResultClient<$Result.GetResult<Prisma.$DrawResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DrawResults.
     * @param {DrawResultCreateManyArgs} args - Arguments to create many DrawResults.
     * @example
     * // Create many DrawResults
     * const drawResult = await prisma.drawResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DrawResultCreateManyArgs>(args?: SelectSubset<T, DrawResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DrawResults and returns the data saved in the database.
     * @param {DrawResultCreateManyAndReturnArgs} args - Arguments to create many DrawResults.
     * @example
     * // Create many DrawResults
     * const drawResult = await prisma.drawResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DrawResults and only return the `id`
     * const drawResultWithIdOnly = await prisma.drawResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DrawResultCreateManyAndReturnArgs>(args?: SelectSubset<T, DrawResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DrawResult.
     * @param {DrawResultDeleteArgs} args - Arguments to delete one DrawResult.
     * @example
     * // Delete one DrawResult
     * const DrawResult = await prisma.drawResult.delete({
     *   where: {
     *     // ... filter to delete one DrawResult
     *   }
     * })
     * 
     */
    delete<T extends DrawResultDeleteArgs>(args: SelectSubset<T, DrawResultDeleteArgs<ExtArgs>>): Prisma__DrawResultClient<$Result.GetResult<Prisma.$DrawResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DrawResult.
     * @param {DrawResultUpdateArgs} args - Arguments to update one DrawResult.
     * @example
     * // Update one DrawResult
     * const drawResult = await prisma.drawResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DrawResultUpdateArgs>(args: SelectSubset<T, DrawResultUpdateArgs<ExtArgs>>): Prisma__DrawResultClient<$Result.GetResult<Prisma.$DrawResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DrawResults.
     * @param {DrawResultDeleteManyArgs} args - Arguments to filter DrawResults to delete.
     * @example
     * // Delete a few DrawResults
     * const { count } = await prisma.drawResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DrawResultDeleteManyArgs>(args?: SelectSubset<T, DrawResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DrawResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DrawResults
     * const drawResult = await prisma.drawResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DrawResultUpdateManyArgs>(args: SelectSubset<T, DrawResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DrawResults and returns the data updated in the database.
     * @param {DrawResultUpdateManyAndReturnArgs} args - Arguments to update many DrawResults.
     * @example
     * // Update many DrawResults
     * const drawResult = await prisma.drawResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DrawResults and only return the `id`
     * const drawResultWithIdOnly = await prisma.drawResult.updateManyAndReturn({
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
    updateManyAndReturn<T extends DrawResultUpdateManyAndReturnArgs>(args: SelectSubset<T, DrawResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DrawResult.
     * @param {DrawResultUpsertArgs} args - Arguments to update or create a DrawResult.
     * @example
     * // Update or create a DrawResult
     * const drawResult = await prisma.drawResult.upsert({
     *   create: {
     *     // ... data to create a DrawResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DrawResult we want to update
     *   }
     * })
     */
    upsert<T extends DrawResultUpsertArgs>(args: SelectSubset<T, DrawResultUpsertArgs<ExtArgs>>): Prisma__DrawResultClient<$Result.GetResult<Prisma.$DrawResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DrawResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawResultCountArgs} args - Arguments to filter DrawResults to count.
     * @example
     * // Count the number of DrawResults
     * const count = await prisma.drawResult.count({
     *   where: {
     *     // ... the filter for the DrawResults we want to count
     *   }
     * })
    **/
    count<T extends DrawResultCountArgs>(
      args?: Subset<T, DrawResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DrawResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DrawResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DrawResultAggregateArgs>(args: Subset<T, DrawResultAggregateArgs>): Prisma.PrismaPromise<GetDrawResultAggregateType<T>>

    /**
     * Group by DrawResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawResultGroupByArgs} args - Group by arguments.
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
      T extends DrawResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DrawResultGroupByArgs['orderBy'] }
        : { orderBy?: DrawResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DrawResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDrawResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DrawResult model
   */
  readonly fields: DrawResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DrawResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DrawResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pairs<T extends DrawResult$pairsArgs<ExtArgs> = {}>(args?: Subset<T, DrawResult$pairsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DrawResult model
   */
  interface DrawResultFieldRefs {
    readonly id: FieldRef<"DrawResult", 'Int'>
    readonly groupId: FieldRef<"DrawResult", 'Int'>
    readonly createdAt: FieldRef<"DrawResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DrawResult findUnique
   */
  export type DrawResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawResult
     */
    select?: DrawResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawResult
     */
    omit?: DrawResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawResultInclude<ExtArgs> | null
    /**
     * Filter, which DrawResult to fetch.
     */
    where: DrawResultWhereUniqueInput
  }

  /**
   * DrawResult findUniqueOrThrow
   */
  export type DrawResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawResult
     */
    select?: DrawResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawResult
     */
    omit?: DrawResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawResultInclude<ExtArgs> | null
    /**
     * Filter, which DrawResult to fetch.
     */
    where: DrawResultWhereUniqueInput
  }

  /**
   * DrawResult findFirst
   */
  export type DrawResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawResult
     */
    select?: DrawResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawResult
     */
    omit?: DrawResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawResultInclude<ExtArgs> | null
    /**
     * Filter, which DrawResult to fetch.
     */
    where?: DrawResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrawResults to fetch.
     */
    orderBy?: DrawResultOrderByWithRelationInput | DrawResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DrawResults.
     */
    cursor?: DrawResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrawResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrawResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DrawResults.
     */
    distinct?: DrawResultScalarFieldEnum | DrawResultScalarFieldEnum[]
  }

  /**
   * DrawResult findFirstOrThrow
   */
  export type DrawResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawResult
     */
    select?: DrawResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawResult
     */
    omit?: DrawResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawResultInclude<ExtArgs> | null
    /**
     * Filter, which DrawResult to fetch.
     */
    where?: DrawResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrawResults to fetch.
     */
    orderBy?: DrawResultOrderByWithRelationInput | DrawResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DrawResults.
     */
    cursor?: DrawResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrawResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrawResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DrawResults.
     */
    distinct?: DrawResultScalarFieldEnum | DrawResultScalarFieldEnum[]
  }

  /**
   * DrawResult findMany
   */
  export type DrawResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawResult
     */
    select?: DrawResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawResult
     */
    omit?: DrawResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawResultInclude<ExtArgs> | null
    /**
     * Filter, which DrawResults to fetch.
     */
    where?: DrawResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrawResults to fetch.
     */
    orderBy?: DrawResultOrderByWithRelationInput | DrawResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DrawResults.
     */
    cursor?: DrawResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrawResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrawResults.
     */
    skip?: number
    distinct?: DrawResultScalarFieldEnum | DrawResultScalarFieldEnum[]
  }

  /**
   * DrawResult create
   */
  export type DrawResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawResult
     */
    select?: DrawResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawResult
     */
    omit?: DrawResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawResultInclude<ExtArgs> | null
    /**
     * The data needed to create a DrawResult.
     */
    data: XOR<DrawResultCreateInput, DrawResultUncheckedCreateInput>
  }

  /**
   * DrawResult createMany
   */
  export type DrawResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DrawResults.
     */
    data: DrawResultCreateManyInput | DrawResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DrawResult createManyAndReturn
   */
  export type DrawResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawResult
     */
    select?: DrawResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DrawResult
     */
    omit?: DrawResultOmit<ExtArgs> | null
    /**
     * The data used to create many DrawResults.
     */
    data: DrawResultCreateManyInput | DrawResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DrawResult update
   */
  export type DrawResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawResult
     */
    select?: DrawResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawResult
     */
    omit?: DrawResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawResultInclude<ExtArgs> | null
    /**
     * The data needed to update a DrawResult.
     */
    data: XOR<DrawResultUpdateInput, DrawResultUncheckedUpdateInput>
    /**
     * Choose, which DrawResult to update.
     */
    where: DrawResultWhereUniqueInput
  }

  /**
   * DrawResult updateMany
   */
  export type DrawResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DrawResults.
     */
    data: XOR<DrawResultUpdateManyMutationInput, DrawResultUncheckedUpdateManyInput>
    /**
     * Filter which DrawResults to update
     */
    where?: DrawResultWhereInput
    /**
     * Limit how many DrawResults to update.
     */
    limit?: number
  }

  /**
   * DrawResult updateManyAndReturn
   */
  export type DrawResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawResult
     */
    select?: DrawResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DrawResult
     */
    omit?: DrawResultOmit<ExtArgs> | null
    /**
     * The data used to update DrawResults.
     */
    data: XOR<DrawResultUpdateManyMutationInput, DrawResultUncheckedUpdateManyInput>
    /**
     * Filter which DrawResults to update
     */
    where?: DrawResultWhereInput
    /**
     * Limit how many DrawResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DrawResult upsert
   */
  export type DrawResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawResult
     */
    select?: DrawResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawResult
     */
    omit?: DrawResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawResultInclude<ExtArgs> | null
    /**
     * The filter to search for the DrawResult to update in case it exists.
     */
    where: DrawResultWhereUniqueInput
    /**
     * In case the DrawResult found by the `where` argument doesn't exist, create a new DrawResult with this data.
     */
    create: XOR<DrawResultCreateInput, DrawResultUncheckedCreateInput>
    /**
     * In case the DrawResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DrawResultUpdateInput, DrawResultUncheckedUpdateInput>
  }

  /**
   * DrawResult delete
   */
  export type DrawResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawResult
     */
    select?: DrawResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawResult
     */
    omit?: DrawResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawResultInclude<ExtArgs> | null
    /**
     * Filter which DrawResult to delete.
     */
    where: DrawResultWhereUniqueInput
  }

  /**
   * DrawResult deleteMany
   */
  export type DrawResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DrawResults to delete
     */
    where?: DrawResultWhereInput
    /**
     * Limit how many DrawResults to delete.
     */
    limit?: number
  }

  /**
   * DrawResult.pairs
   */
  export type DrawResult$pairsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    where?: PairWhereInput
    orderBy?: PairOrderByWithRelationInput | PairOrderByWithRelationInput[]
    cursor?: PairWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PairScalarFieldEnum | PairScalarFieldEnum[]
  }

  /**
   * DrawResult without action
   */
  export type DrawResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawResult
     */
    select?: DrawResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrawResult
     */
    omit?: DrawResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawResultInclude<ExtArgs> | null
  }


  /**
   * Model Pair
   */

  export type AggregatePair = {
    _count: PairCountAggregateOutputType | null
    _avg: PairAvgAggregateOutputType | null
    _sum: PairSumAggregateOutputType | null
    _min: PairMinAggregateOutputType | null
    _max: PairMaxAggregateOutputType | null
  }

  export type PairAvgAggregateOutputType = {
    id: number | null
    drawId: number | null
    giverId: number | null
    takerId: number | null
  }

  export type PairSumAggregateOutputType = {
    id: number | null
    drawId: number | null
    giverId: number | null
    takerId: number | null
  }

  export type PairMinAggregateOutputType = {
    id: number | null
    drawId: number | null
    giverId: number | null
    takerId: number | null
  }

  export type PairMaxAggregateOutputType = {
    id: number | null
    drawId: number | null
    giverId: number | null
    takerId: number | null
  }

  export type PairCountAggregateOutputType = {
    id: number
    drawId: number
    giverId: number
    takerId: number
    _all: number
  }


  export type PairAvgAggregateInputType = {
    id?: true
    drawId?: true
    giverId?: true
    takerId?: true
  }

  export type PairSumAggregateInputType = {
    id?: true
    drawId?: true
    giverId?: true
    takerId?: true
  }

  export type PairMinAggregateInputType = {
    id?: true
    drawId?: true
    giverId?: true
    takerId?: true
  }

  export type PairMaxAggregateInputType = {
    id?: true
    drawId?: true
    giverId?: true
    takerId?: true
  }

  export type PairCountAggregateInputType = {
    id?: true
    drawId?: true
    giverId?: true
    takerId?: true
    _all?: true
  }

  export type PairAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pair to aggregate.
     */
    where?: PairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pairs to fetch.
     */
    orderBy?: PairOrderByWithRelationInput | PairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pairs
    **/
    _count?: true | PairCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PairAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PairSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PairMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PairMaxAggregateInputType
  }

  export type GetPairAggregateType<T extends PairAggregateArgs> = {
        [P in keyof T & keyof AggregatePair]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePair[P]>
      : GetScalarType<T[P], AggregatePair[P]>
  }




  export type PairGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PairWhereInput
    orderBy?: PairOrderByWithAggregationInput | PairOrderByWithAggregationInput[]
    by: PairScalarFieldEnum[] | PairScalarFieldEnum
    having?: PairScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PairCountAggregateInputType | true
    _avg?: PairAvgAggregateInputType
    _sum?: PairSumAggregateInputType
    _min?: PairMinAggregateInputType
    _max?: PairMaxAggregateInputType
  }

  export type PairGroupByOutputType = {
    id: number
    drawId: number
    giverId: number
    takerId: number
    _count: PairCountAggregateOutputType | null
    _avg: PairAvgAggregateOutputType | null
    _sum: PairSumAggregateOutputType | null
    _min: PairMinAggregateOutputType | null
    _max: PairMaxAggregateOutputType | null
  }

  type GetPairGroupByPayload<T extends PairGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PairGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PairGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PairGroupByOutputType[P]>
            : GetScalarType<T[P], PairGroupByOutputType[P]>
        }
      >
    >


  export type PairSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    drawId?: boolean
    giverId?: boolean
    takerId?: boolean
    draw?: boolean | DrawResultDefaultArgs<ExtArgs>
    giver?: boolean | ParticipantDefaultArgs<ExtArgs>
    taker?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pair"]>

  export type PairSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    drawId?: boolean
    giverId?: boolean
    takerId?: boolean
    draw?: boolean | DrawResultDefaultArgs<ExtArgs>
    giver?: boolean | ParticipantDefaultArgs<ExtArgs>
    taker?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pair"]>

  export type PairSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    drawId?: boolean
    giverId?: boolean
    takerId?: boolean
    draw?: boolean | DrawResultDefaultArgs<ExtArgs>
    giver?: boolean | ParticipantDefaultArgs<ExtArgs>
    taker?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pair"]>

  export type PairSelectScalar = {
    id?: boolean
    drawId?: boolean
    giverId?: boolean
    takerId?: boolean
  }

  export type PairOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "drawId" | "giverId" | "takerId", ExtArgs["result"]["pair"]>
  export type PairInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draw?: boolean | DrawResultDefaultArgs<ExtArgs>
    giver?: boolean | ParticipantDefaultArgs<ExtArgs>
    taker?: boolean | ParticipantDefaultArgs<ExtArgs>
  }
  export type PairIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draw?: boolean | DrawResultDefaultArgs<ExtArgs>
    giver?: boolean | ParticipantDefaultArgs<ExtArgs>
    taker?: boolean | ParticipantDefaultArgs<ExtArgs>
  }
  export type PairIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draw?: boolean | DrawResultDefaultArgs<ExtArgs>
    giver?: boolean | ParticipantDefaultArgs<ExtArgs>
    taker?: boolean | ParticipantDefaultArgs<ExtArgs>
  }

  export type $PairPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pair"
    objects: {
      draw: Prisma.$DrawResultPayload<ExtArgs>
      giver: Prisma.$ParticipantPayload<ExtArgs>
      taker: Prisma.$ParticipantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      drawId: number
      giverId: number
      takerId: number
    }, ExtArgs["result"]["pair"]>
    composites: {}
  }

  type PairGetPayload<S extends boolean | null | undefined | PairDefaultArgs> = $Result.GetResult<Prisma.$PairPayload, S>

  type PairCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PairFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PairCountAggregateInputType | true
    }

  export interface PairDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pair'], meta: { name: 'Pair' } }
    /**
     * Find zero or one Pair that matches the filter.
     * @param {PairFindUniqueArgs} args - Arguments to find a Pair
     * @example
     * // Get one Pair
     * const pair = await prisma.pair.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PairFindUniqueArgs>(args: SelectSubset<T, PairFindUniqueArgs<ExtArgs>>): Prisma__PairClient<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pair that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PairFindUniqueOrThrowArgs} args - Arguments to find a Pair
     * @example
     * // Get one Pair
     * const pair = await prisma.pair.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PairFindUniqueOrThrowArgs>(args: SelectSubset<T, PairFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PairClient<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pair that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairFindFirstArgs} args - Arguments to find a Pair
     * @example
     * // Get one Pair
     * const pair = await prisma.pair.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PairFindFirstArgs>(args?: SelectSubset<T, PairFindFirstArgs<ExtArgs>>): Prisma__PairClient<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pair that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairFindFirstOrThrowArgs} args - Arguments to find a Pair
     * @example
     * // Get one Pair
     * const pair = await prisma.pair.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PairFindFirstOrThrowArgs>(args?: SelectSubset<T, PairFindFirstOrThrowArgs<ExtArgs>>): Prisma__PairClient<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pairs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pairs
     * const pairs = await prisma.pair.findMany()
     * 
     * // Get first 10 Pairs
     * const pairs = await prisma.pair.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pairWithIdOnly = await prisma.pair.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PairFindManyArgs>(args?: SelectSubset<T, PairFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pair.
     * @param {PairCreateArgs} args - Arguments to create a Pair.
     * @example
     * // Create one Pair
     * const Pair = await prisma.pair.create({
     *   data: {
     *     // ... data to create a Pair
     *   }
     * })
     * 
     */
    create<T extends PairCreateArgs>(args: SelectSubset<T, PairCreateArgs<ExtArgs>>): Prisma__PairClient<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pairs.
     * @param {PairCreateManyArgs} args - Arguments to create many Pairs.
     * @example
     * // Create many Pairs
     * const pair = await prisma.pair.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PairCreateManyArgs>(args?: SelectSubset<T, PairCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pairs and returns the data saved in the database.
     * @param {PairCreateManyAndReturnArgs} args - Arguments to create many Pairs.
     * @example
     * // Create many Pairs
     * const pair = await prisma.pair.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pairs and only return the `id`
     * const pairWithIdOnly = await prisma.pair.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PairCreateManyAndReturnArgs>(args?: SelectSubset<T, PairCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pair.
     * @param {PairDeleteArgs} args - Arguments to delete one Pair.
     * @example
     * // Delete one Pair
     * const Pair = await prisma.pair.delete({
     *   where: {
     *     // ... filter to delete one Pair
     *   }
     * })
     * 
     */
    delete<T extends PairDeleteArgs>(args: SelectSubset<T, PairDeleteArgs<ExtArgs>>): Prisma__PairClient<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pair.
     * @param {PairUpdateArgs} args - Arguments to update one Pair.
     * @example
     * // Update one Pair
     * const pair = await prisma.pair.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PairUpdateArgs>(args: SelectSubset<T, PairUpdateArgs<ExtArgs>>): Prisma__PairClient<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pairs.
     * @param {PairDeleteManyArgs} args - Arguments to filter Pairs to delete.
     * @example
     * // Delete a few Pairs
     * const { count } = await prisma.pair.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PairDeleteManyArgs>(args?: SelectSubset<T, PairDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pairs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pairs
     * const pair = await prisma.pair.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PairUpdateManyArgs>(args: SelectSubset<T, PairUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pairs and returns the data updated in the database.
     * @param {PairUpdateManyAndReturnArgs} args - Arguments to update many Pairs.
     * @example
     * // Update many Pairs
     * const pair = await prisma.pair.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pairs and only return the `id`
     * const pairWithIdOnly = await prisma.pair.updateManyAndReturn({
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
    updateManyAndReturn<T extends PairUpdateManyAndReturnArgs>(args: SelectSubset<T, PairUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pair.
     * @param {PairUpsertArgs} args - Arguments to update or create a Pair.
     * @example
     * // Update or create a Pair
     * const pair = await prisma.pair.upsert({
     *   create: {
     *     // ... data to create a Pair
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pair we want to update
     *   }
     * })
     */
    upsert<T extends PairUpsertArgs>(args: SelectSubset<T, PairUpsertArgs<ExtArgs>>): Prisma__PairClient<$Result.GetResult<Prisma.$PairPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pairs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairCountArgs} args - Arguments to filter Pairs to count.
     * @example
     * // Count the number of Pairs
     * const count = await prisma.pair.count({
     *   where: {
     *     // ... the filter for the Pairs we want to count
     *   }
     * })
    **/
    count<T extends PairCountArgs>(
      args?: Subset<T, PairCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PairCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pair.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PairAggregateArgs>(args: Subset<T, PairAggregateArgs>): Prisma.PrismaPromise<GetPairAggregateType<T>>

    /**
     * Group by Pair.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairGroupByArgs} args - Group by arguments.
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
      T extends PairGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PairGroupByArgs['orderBy'] }
        : { orderBy?: PairGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PairGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPairGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pair model
   */
  readonly fields: PairFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pair.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PairClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    draw<T extends DrawResultDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DrawResultDefaultArgs<ExtArgs>>): Prisma__DrawResultClient<$Result.GetResult<Prisma.$DrawResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    giver<T extends ParticipantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantDefaultArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    taker<T extends ParticipantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantDefaultArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pair model
   */
  interface PairFieldRefs {
    readonly id: FieldRef<"Pair", 'Int'>
    readonly drawId: FieldRef<"Pair", 'Int'>
    readonly giverId: FieldRef<"Pair", 'Int'>
    readonly takerId: FieldRef<"Pair", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pair findUnique
   */
  export type PairFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    /**
     * Filter, which Pair to fetch.
     */
    where: PairWhereUniqueInput
  }

  /**
   * Pair findUniqueOrThrow
   */
  export type PairFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    /**
     * Filter, which Pair to fetch.
     */
    where: PairWhereUniqueInput
  }

  /**
   * Pair findFirst
   */
  export type PairFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    /**
     * Filter, which Pair to fetch.
     */
    where?: PairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pairs to fetch.
     */
    orderBy?: PairOrderByWithRelationInput | PairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pairs.
     */
    cursor?: PairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pairs.
     */
    distinct?: PairScalarFieldEnum | PairScalarFieldEnum[]
  }

  /**
   * Pair findFirstOrThrow
   */
  export type PairFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    /**
     * Filter, which Pair to fetch.
     */
    where?: PairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pairs to fetch.
     */
    orderBy?: PairOrderByWithRelationInput | PairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pairs.
     */
    cursor?: PairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pairs.
     */
    distinct?: PairScalarFieldEnum | PairScalarFieldEnum[]
  }

  /**
   * Pair findMany
   */
  export type PairFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    /**
     * Filter, which Pairs to fetch.
     */
    where?: PairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pairs to fetch.
     */
    orderBy?: PairOrderByWithRelationInput | PairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pairs.
     */
    cursor?: PairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pairs.
     */
    skip?: number
    distinct?: PairScalarFieldEnum | PairScalarFieldEnum[]
  }

  /**
   * Pair create
   */
  export type PairCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    /**
     * The data needed to create a Pair.
     */
    data: XOR<PairCreateInput, PairUncheckedCreateInput>
  }

  /**
   * Pair createMany
   */
  export type PairCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pairs.
     */
    data: PairCreateManyInput | PairCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pair createManyAndReturn
   */
  export type PairCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * The data used to create many Pairs.
     */
    data: PairCreateManyInput | PairCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pair update
   */
  export type PairUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    /**
     * The data needed to update a Pair.
     */
    data: XOR<PairUpdateInput, PairUncheckedUpdateInput>
    /**
     * Choose, which Pair to update.
     */
    where: PairWhereUniqueInput
  }

  /**
   * Pair updateMany
   */
  export type PairUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pairs.
     */
    data: XOR<PairUpdateManyMutationInput, PairUncheckedUpdateManyInput>
    /**
     * Filter which Pairs to update
     */
    where?: PairWhereInput
    /**
     * Limit how many Pairs to update.
     */
    limit?: number
  }

  /**
   * Pair updateManyAndReturn
   */
  export type PairUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * The data used to update Pairs.
     */
    data: XOR<PairUpdateManyMutationInput, PairUncheckedUpdateManyInput>
    /**
     * Filter which Pairs to update
     */
    where?: PairWhereInput
    /**
     * Limit how many Pairs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pair upsert
   */
  export type PairUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    /**
     * The filter to search for the Pair to update in case it exists.
     */
    where: PairWhereUniqueInput
    /**
     * In case the Pair found by the `where` argument doesn't exist, create a new Pair with this data.
     */
    create: XOR<PairCreateInput, PairUncheckedCreateInput>
    /**
     * In case the Pair was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PairUpdateInput, PairUncheckedUpdateInput>
  }

  /**
   * Pair delete
   */
  export type PairDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
    /**
     * Filter which Pair to delete.
     */
    where: PairWhereUniqueInput
  }

  /**
   * Pair deleteMany
   */
  export type PairDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pairs to delete
     */
    where?: PairWhereInput
    /**
     * Limit how many Pairs to delete.
     */
    limit?: number
  }

  /**
   * Pair without action
   */
  export type PairDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pair
     */
    select?: PairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pair
     */
    omit?: PairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PairInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    groupId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    userId: number | null
    groupId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    groupId: number | null
    type: $Enums.NotificationType | null
    message: string | null
    createdAt: Date | null
    delivered: boolean | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    groupId: number | null
    type: $Enums.NotificationType | null
    message: string | null
    createdAt: Date | null
    delivered: boolean | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    groupId: number
    type: number
    message: number
    createdAt: number
    delivered: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
    type?: true
    message?: true
    createdAt?: true
    delivered?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
    type?: true
    message?: true
    createdAt?: true
    delivered?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
    type?: true
    message?: true
    createdAt?: true
    delivered?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    userId: number
    groupId: number | null
    type: $Enums.NotificationType
    message: string
    createdAt: Date
    delivered: boolean
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    groupId?: boolean
    type?: boolean
    message?: boolean
    createdAt?: boolean
    delivered?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Notification$groupArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    groupId?: boolean
    type?: boolean
    message?: boolean
    createdAt?: boolean
    delivered?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Notification$groupArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    groupId?: boolean
    type?: boolean
    message?: boolean
    createdAt?: boolean
    delivered?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Notification$groupArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    groupId?: boolean
    type?: boolean
    message?: boolean
    createdAt?: boolean
    delivered?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "groupId" | "type" | "message" | "createdAt" | "delivered", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Notification$groupArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Notification$groupArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Notification$groupArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      group: Prisma.$GroupPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      groupId: number | null
      type: $Enums.NotificationType
      message: string
      createdAt: Date
      delivered: boolean
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    group<T extends Notification$groupArgs<ExtArgs> = {}>(args?: Subset<T, Notification$groupArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly userId: FieldRef<"Notification", 'Int'>
    readonly groupId: FieldRef<"Notification", 'Int'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly delivered: FieldRef<"Notification", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.group
   */
  export type Notification$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    inviteCode: 'inviteCode',
    minValue: 'minValue',
    maxValue: 'maxValue',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ownerId: 'ownerId'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const ParticipantScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    groupId: 'groupId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ParticipantScalarFieldEnum = (typeof ParticipantScalarFieldEnum)[keyof typeof ParticipantScalarFieldEnum]


  export const WishlistScalarFieldEnum: {
    id: 'id',
    participantId: 'participantId',
    items: 'items',
    updatedAt: 'updatedAt'
  };

  export type WishlistScalarFieldEnum = (typeof WishlistScalarFieldEnum)[keyof typeof WishlistScalarFieldEnum]


  export const RestrictionScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    blockedGiverId: 'blockedGiverId',
    blockedTakerId: 'blockedTakerId'
  };

  export type RestrictionScalarFieldEnum = (typeof RestrictionScalarFieldEnum)[keyof typeof RestrictionScalarFieldEnum]


  export const DrawResultScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    createdAt: 'createdAt'
  };

  export type DrawResultScalarFieldEnum = (typeof DrawResultScalarFieldEnum)[keyof typeof DrawResultScalarFieldEnum]


  export const PairScalarFieldEnum: {
    id: 'id',
    drawId: 'drawId',
    giverId: 'giverId',
    takerId: 'takerId'
  };

  export type PairScalarFieldEnum = (typeof PairScalarFieldEnum)[keyof typeof PairScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    groupId: 'groupId',
    type: 'type',
    message: 'message',
    createdAt: 'createdAt',
    delivered: 'delivered'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ParticipantStatus'
   */
  export type EnumParticipantStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParticipantStatus'>
    


  /**
   * Reference to a field of type 'ParticipantStatus[]'
   */
  export type ListEnumParticipantStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParticipantStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    groupsOwned?: GroupListRelationFilter
    participants?: ParticipantListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    groupsOwned?: GroupOrderByRelationAggregateInput
    participants?: ParticipantOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    groupsOwned?: GroupListRelationFilter
    participants?: ParticipantListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: IntFilter<"Group"> | number
    name?: StringFilter<"Group"> | string
    description?: StringNullableFilter<"Group"> | string | null
    inviteCode?: StringFilter<"Group"> | string
    minValue?: FloatNullableFilter<"Group"> | number | null
    maxValue?: FloatNullableFilter<"Group"> | number | null
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    ownerId?: IntFilter<"Group"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    participants?: ParticipantListRelationFilter
    restrictions?: RestrictionListRelationFilter
    result?: XOR<DrawResultNullableScalarRelationFilter, DrawResultWhereInput> | null
    notifications?: NotificationListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    inviteCode?: SortOrder
    minValue?: SortOrderInput | SortOrder
    maxValue?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
    participants?: ParticipantOrderByRelationAggregateInput
    restrictions?: RestrictionOrderByRelationAggregateInput
    result?: DrawResultOrderByWithRelationInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    inviteCode?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    name?: StringFilter<"Group"> | string
    description?: StringNullableFilter<"Group"> | string | null
    minValue?: FloatNullableFilter<"Group"> | number | null
    maxValue?: FloatNullableFilter<"Group"> | number | null
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    ownerId?: IntFilter<"Group"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    participants?: ParticipantListRelationFilter
    restrictions?: RestrictionListRelationFilter
    result?: XOR<DrawResultNullableScalarRelationFilter, DrawResultWhereInput> | null
    notifications?: NotificationListRelationFilter
  }, "id" | "inviteCode">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    inviteCode?: SortOrder
    minValue?: SortOrderInput | SortOrder
    maxValue?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _avg?: GroupAvgOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
    _sum?: GroupSumOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Group"> | number
    name?: StringWithAggregatesFilter<"Group"> | string
    description?: StringNullableWithAggregatesFilter<"Group"> | string | null
    inviteCode?: StringWithAggregatesFilter<"Group"> | string
    minValue?: FloatNullableWithAggregatesFilter<"Group"> | number | null
    maxValue?: FloatNullableWithAggregatesFilter<"Group"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    ownerId?: IntWithAggregatesFilter<"Group"> | number
  }

  export type ParticipantWhereInput = {
    AND?: ParticipantWhereInput | ParticipantWhereInput[]
    OR?: ParticipantWhereInput[]
    NOT?: ParticipantWhereInput | ParticipantWhereInput[]
    id?: IntFilter<"Participant"> | number
    userId?: IntFilter<"Participant"> | number
    groupId?: IntFilter<"Participant"> | number
    status?: EnumParticipantStatusFilter<"Participant"> | $Enums.ParticipantStatus
    createdAt?: DateTimeFilter<"Participant"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    wishlist?: XOR<WishlistNullableScalarRelationFilter, WishlistWhereInput> | null
    giverPairs?: PairListRelationFilter
    takerPairs?: PairListRelationFilter
    giverRestrictions?: RestrictionListRelationFilter
    takerRestrictions?: RestrictionListRelationFilter
  }

  export type ParticipantOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
    wishlist?: WishlistOrderByWithRelationInput
    giverPairs?: PairOrderByRelationAggregateInput
    takerPairs?: PairOrderByRelationAggregateInput
    giverRestrictions?: RestrictionOrderByRelationAggregateInput
    takerRestrictions?: RestrictionOrderByRelationAggregateInput
  }

  export type ParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ParticipantWhereInput | ParticipantWhereInput[]
    OR?: ParticipantWhereInput[]
    NOT?: ParticipantWhereInput | ParticipantWhereInput[]
    userId?: IntFilter<"Participant"> | number
    groupId?: IntFilter<"Participant"> | number
    status?: EnumParticipantStatusFilter<"Participant"> | $Enums.ParticipantStatus
    createdAt?: DateTimeFilter<"Participant"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    wishlist?: XOR<WishlistNullableScalarRelationFilter, WishlistWhereInput> | null
    giverPairs?: PairListRelationFilter
    takerPairs?: PairListRelationFilter
    giverRestrictions?: RestrictionListRelationFilter
    takerRestrictions?: RestrictionListRelationFilter
  }, "id">

  export type ParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ParticipantCountOrderByAggregateInput
    _avg?: ParticipantAvgOrderByAggregateInput
    _max?: ParticipantMaxOrderByAggregateInput
    _min?: ParticipantMinOrderByAggregateInput
    _sum?: ParticipantSumOrderByAggregateInput
  }

  export type ParticipantScalarWhereWithAggregatesInput = {
    AND?: ParticipantScalarWhereWithAggregatesInput | ParticipantScalarWhereWithAggregatesInput[]
    OR?: ParticipantScalarWhereWithAggregatesInput[]
    NOT?: ParticipantScalarWhereWithAggregatesInput | ParticipantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Participant"> | number
    userId?: IntWithAggregatesFilter<"Participant"> | number
    groupId?: IntWithAggregatesFilter<"Participant"> | number
    status?: EnumParticipantStatusWithAggregatesFilter<"Participant"> | $Enums.ParticipantStatus
    createdAt?: DateTimeWithAggregatesFilter<"Participant"> | Date | string
  }

  export type WishlistWhereInput = {
    AND?: WishlistWhereInput | WishlistWhereInput[]
    OR?: WishlistWhereInput[]
    NOT?: WishlistWhereInput | WishlistWhereInput[]
    id?: IntFilter<"Wishlist"> | number
    participantId?: IntFilter<"Wishlist"> | number
    items?: JsonFilter<"Wishlist">
    updatedAt?: DateTimeFilter<"Wishlist"> | Date | string
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
  }

  export type WishlistOrderByWithRelationInput = {
    id?: SortOrder
    participantId?: SortOrder
    items?: SortOrder
    updatedAt?: SortOrder
    participant?: ParticipantOrderByWithRelationInput
  }

  export type WishlistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    participantId?: number
    AND?: WishlistWhereInput | WishlistWhereInput[]
    OR?: WishlistWhereInput[]
    NOT?: WishlistWhereInput | WishlistWhereInput[]
    items?: JsonFilter<"Wishlist">
    updatedAt?: DateTimeFilter<"Wishlist"> | Date | string
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
  }, "id" | "participantId">

  export type WishlistOrderByWithAggregationInput = {
    id?: SortOrder
    participantId?: SortOrder
    items?: SortOrder
    updatedAt?: SortOrder
    _count?: WishlistCountOrderByAggregateInput
    _avg?: WishlistAvgOrderByAggregateInput
    _max?: WishlistMaxOrderByAggregateInput
    _min?: WishlistMinOrderByAggregateInput
    _sum?: WishlistSumOrderByAggregateInput
  }

  export type WishlistScalarWhereWithAggregatesInput = {
    AND?: WishlistScalarWhereWithAggregatesInput | WishlistScalarWhereWithAggregatesInput[]
    OR?: WishlistScalarWhereWithAggregatesInput[]
    NOT?: WishlistScalarWhereWithAggregatesInput | WishlistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Wishlist"> | number
    participantId?: IntWithAggregatesFilter<"Wishlist"> | number
    items?: JsonWithAggregatesFilter<"Wishlist">
    updatedAt?: DateTimeWithAggregatesFilter<"Wishlist"> | Date | string
  }

  export type RestrictionWhereInput = {
    AND?: RestrictionWhereInput | RestrictionWhereInput[]
    OR?: RestrictionWhereInput[]
    NOT?: RestrictionWhereInput | RestrictionWhereInput[]
    id?: IntFilter<"Restriction"> | number
    groupId?: IntFilter<"Restriction"> | number
    blockedGiverId?: IntFilter<"Restriction"> | number
    blockedTakerId?: IntFilter<"Restriction"> | number
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    giver?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
    taker?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
  }

  export type RestrictionOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    blockedGiverId?: SortOrder
    blockedTakerId?: SortOrder
    group?: GroupOrderByWithRelationInput
    giver?: ParticipantOrderByWithRelationInput
    taker?: ParticipantOrderByWithRelationInput
  }

  export type RestrictionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RestrictionWhereInput | RestrictionWhereInput[]
    OR?: RestrictionWhereInput[]
    NOT?: RestrictionWhereInput | RestrictionWhereInput[]
    groupId?: IntFilter<"Restriction"> | number
    blockedGiverId?: IntFilter<"Restriction"> | number
    blockedTakerId?: IntFilter<"Restriction"> | number
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    giver?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
    taker?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
  }, "id">

  export type RestrictionOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    blockedGiverId?: SortOrder
    blockedTakerId?: SortOrder
    _count?: RestrictionCountOrderByAggregateInput
    _avg?: RestrictionAvgOrderByAggregateInput
    _max?: RestrictionMaxOrderByAggregateInput
    _min?: RestrictionMinOrderByAggregateInput
    _sum?: RestrictionSumOrderByAggregateInput
  }

  export type RestrictionScalarWhereWithAggregatesInput = {
    AND?: RestrictionScalarWhereWithAggregatesInput | RestrictionScalarWhereWithAggregatesInput[]
    OR?: RestrictionScalarWhereWithAggregatesInput[]
    NOT?: RestrictionScalarWhereWithAggregatesInput | RestrictionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Restriction"> | number
    groupId?: IntWithAggregatesFilter<"Restriction"> | number
    blockedGiverId?: IntWithAggregatesFilter<"Restriction"> | number
    blockedTakerId?: IntWithAggregatesFilter<"Restriction"> | number
  }

  export type DrawResultWhereInput = {
    AND?: DrawResultWhereInput | DrawResultWhereInput[]
    OR?: DrawResultWhereInput[]
    NOT?: DrawResultWhereInput | DrawResultWhereInput[]
    id?: IntFilter<"DrawResult"> | number
    groupId?: IntFilter<"DrawResult"> | number
    createdAt?: DateTimeFilter<"DrawResult"> | Date | string
    pairs?: PairListRelationFilter
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }

  export type DrawResultOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    pairs?: PairOrderByRelationAggregateInput
    group?: GroupOrderByWithRelationInput
  }

  export type DrawResultWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    groupId?: number
    AND?: DrawResultWhereInput | DrawResultWhereInput[]
    OR?: DrawResultWhereInput[]
    NOT?: DrawResultWhereInput | DrawResultWhereInput[]
    createdAt?: DateTimeFilter<"DrawResult"> | Date | string
    pairs?: PairListRelationFilter
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }, "id" | "groupId">

  export type DrawResultOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    _count?: DrawResultCountOrderByAggregateInput
    _avg?: DrawResultAvgOrderByAggregateInput
    _max?: DrawResultMaxOrderByAggregateInput
    _min?: DrawResultMinOrderByAggregateInput
    _sum?: DrawResultSumOrderByAggregateInput
  }

  export type DrawResultScalarWhereWithAggregatesInput = {
    AND?: DrawResultScalarWhereWithAggregatesInput | DrawResultScalarWhereWithAggregatesInput[]
    OR?: DrawResultScalarWhereWithAggregatesInput[]
    NOT?: DrawResultScalarWhereWithAggregatesInput | DrawResultScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DrawResult"> | number
    groupId?: IntWithAggregatesFilter<"DrawResult"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DrawResult"> | Date | string
  }

  export type PairWhereInput = {
    AND?: PairWhereInput | PairWhereInput[]
    OR?: PairWhereInput[]
    NOT?: PairWhereInput | PairWhereInput[]
    id?: IntFilter<"Pair"> | number
    drawId?: IntFilter<"Pair"> | number
    giverId?: IntFilter<"Pair"> | number
    takerId?: IntFilter<"Pair"> | number
    draw?: XOR<DrawResultScalarRelationFilter, DrawResultWhereInput>
    giver?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
    taker?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
  }

  export type PairOrderByWithRelationInput = {
    id?: SortOrder
    drawId?: SortOrder
    giverId?: SortOrder
    takerId?: SortOrder
    draw?: DrawResultOrderByWithRelationInput
    giver?: ParticipantOrderByWithRelationInput
    taker?: ParticipantOrderByWithRelationInput
  }

  export type PairWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PairWhereInput | PairWhereInput[]
    OR?: PairWhereInput[]
    NOT?: PairWhereInput | PairWhereInput[]
    drawId?: IntFilter<"Pair"> | number
    giverId?: IntFilter<"Pair"> | number
    takerId?: IntFilter<"Pair"> | number
    draw?: XOR<DrawResultScalarRelationFilter, DrawResultWhereInput>
    giver?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
    taker?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
  }, "id">

  export type PairOrderByWithAggregationInput = {
    id?: SortOrder
    drawId?: SortOrder
    giverId?: SortOrder
    takerId?: SortOrder
    _count?: PairCountOrderByAggregateInput
    _avg?: PairAvgOrderByAggregateInput
    _max?: PairMaxOrderByAggregateInput
    _min?: PairMinOrderByAggregateInput
    _sum?: PairSumOrderByAggregateInput
  }

  export type PairScalarWhereWithAggregatesInput = {
    AND?: PairScalarWhereWithAggregatesInput | PairScalarWhereWithAggregatesInput[]
    OR?: PairScalarWhereWithAggregatesInput[]
    NOT?: PairScalarWhereWithAggregatesInput | PairScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pair"> | number
    drawId?: IntWithAggregatesFilter<"Pair"> | number
    giverId?: IntWithAggregatesFilter<"Pair"> | number
    takerId?: IntWithAggregatesFilter<"Pair"> | number
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntFilter<"Notification"> | number
    groupId?: IntNullableFilter<"Notification"> | number | null
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    message?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    delivered?: BoolFilter<"Notification"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrderInput | SortOrder
    type?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    delivered?: SortOrder
    user?: UserOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: IntFilter<"Notification"> | number
    groupId?: IntNullableFilter<"Notification"> | number | null
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    message?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    delivered?: BoolFilter<"Notification"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrderInput | SortOrder
    type?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    delivered?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    userId?: IntWithAggregatesFilter<"Notification"> | number
    groupId?: IntNullableWithAggregatesFilter<"Notification"> | number | null
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    message?: StringWithAggregatesFilter<"Notification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    delivered?: BoolWithAggregatesFilter<"Notification"> | boolean
  }

  export type UserCreateInput = {
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupsOwned?: GroupCreateNestedManyWithoutOwnerInput
    participants?: ParticipantCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupsOwned?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    participants?: ParticipantUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupsOwned?: GroupUpdateManyWithoutOwnerNestedInput
    participants?: ParticipantUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupsOwned?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    participants?: ParticipantUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupCreateInput = {
    name: string
    description?: string | null
    inviteCode: string
    minValue?: number | null
    maxValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutGroupsOwnedInput
    participants?: ParticipantCreateNestedManyWithoutGroupInput
    restrictions?: RestrictionCreateNestedManyWithoutGroupInput
    result?: DrawResultCreateNestedOneWithoutGroupInput
    notifications?: NotificationCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    inviteCode: string
    minValue?: number | null
    maxValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
    participants?: ParticipantUncheckedCreateNestedManyWithoutGroupInput
    restrictions?: RestrictionUncheckedCreateNestedManyWithoutGroupInput
    result?: DrawResultUncheckedCreateNestedOneWithoutGroupInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: StringFieldUpdateOperationsInput | string
    minValue?: NullableFloatFieldUpdateOperationsInput | number | null
    maxValue?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutGroupsOwnedNestedInput
    participants?: ParticipantUpdateManyWithoutGroupNestedInput
    restrictions?: RestrictionUpdateManyWithoutGroupNestedInput
    result?: DrawResultUpdateOneWithoutGroupNestedInput
    notifications?: NotificationUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: StringFieldUpdateOperationsInput | string
    minValue?: NullableFloatFieldUpdateOperationsInput | number | null
    maxValue?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    participants?: ParticipantUncheckedUpdateManyWithoutGroupNestedInput
    restrictions?: RestrictionUncheckedUpdateManyWithoutGroupNestedInput
    result?: DrawResultUncheckedUpdateOneWithoutGroupNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    inviteCode: string
    minValue?: number | null
    maxValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
  }

  export type GroupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: StringFieldUpdateOperationsInput | string
    minValue?: NullableFloatFieldUpdateOperationsInput | number | null
    maxValue?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: StringFieldUpdateOperationsInput | string
    minValue?: NullableFloatFieldUpdateOperationsInput | number | null
    maxValue?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
  }

  export type ParticipantCreateInput = {
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutParticipantsInput
    group: GroupCreateNestedOneWithoutParticipantsInput
    wishlist?: WishlistCreateNestedOneWithoutParticipantInput
    giverPairs?: PairCreateNestedManyWithoutGiverInput
    takerPairs?: PairCreateNestedManyWithoutTakerInput
    giverRestrictions?: RestrictionCreateNestedManyWithoutGiverInput
    takerRestrictions?: RestrictionCreateNestedManyWithoutTakerInput
  }

  export type ParticipantUncheckedCreateInput = {
    id?: number
    userId: number
    groupId: number
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
    wishlist?: WishlistUncheckedCreateNestedOneWithoutParticipantInput
    giverPairs?: PairUncheckedCreateNestedManyWithoutGiverInput
    takerPairs?: PairUncheckedCreateNestedManyWithoutTakerInput
    giverRestrictions?: RestrictionUncheckedCreateNestedManyWithoutGiverInput
    takerRestrictions?: RestrictionUncheckedCreateNestedManyWithoutTakerInput
  }

  export type ParticipantUpdateInput = {
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutParticipantsNestedInput
    group?: GroupUpdateOneRequiredWithoutParticipantsNestedInput
    wishlist?: WishlistUpdateOneWithoutParticipantNestedInput
    giverPairs?: PairUpdateManyWithoutGiverNestedInput
    takerPairs?: PairUpdateManyWithoutTakerNestedInput
    giverRestrictions?: RestrictionUpdateManyWithoutGiverNestedInput
    takerRestrictions?: RestrictionUpdateManyWithoutTakerNestedInput
  }

  export type ParticipantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wishlist?: WishlistUncheckedUpdateOneWithoutParticipantNestedInput
    giverPairs?: PairUncheckedUpdateManyWithoutGiverNestedInput
    takerPairs?: PairUncheckedUpdateManyWithoutTakerNestedInput
    giverRestrictions?: RestrictionUncheckedUpdateManyWithoutGiverNestedInput
    takerRestrictions?: RestrictionUncheckedUpdateManyWithoutTakerNestedInput
  }

  export type ParticipantCreateManyInput = {
    id?: number
    userId: number
    groupId: number
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
  }

  export type ParticipantUpdateManyMutationInput = {
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistCreateInput = {
    items: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    participant: ParticipantCreateNestedOneWithoutWishlistInput
  }

  export type WishlistUncheckedCreateInput = {
    id?: number
    participantId: number
    items: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type WishlistUpdateInput = {
    items?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participant?: ParticipantUpdateOneRequiredWithoutWishlistNestedInput
  }

  export type WishlistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    participantId?: IntFieldUpdateOperationsInput | number
    items?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistCreateManyInput = {
    id?: number
    participantId: number
    items: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type WishlistUpdateManyMutationInput = {
    items?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    participantId?: IntFieldUpdateOperationsInput | number
    items?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestrictionCreateInput = {
    group: GroupCreateNestedOneWithoutRestrictionsInput
    giver: ParticipantCreateNestedOneWithoutGiverRestrictionsInput
    taker: ParticipantCreateNestedOneWithoutTakerRestrictionsInput
  }

  export type RestrictionUncheckedCreateInput = {
    id?: number
    groupId: number
    blockedGiverId: number
    blockedTakerId: number
  }

  export type RestrictionUpdateInput = {
    group?: GroupUpdateOneRequiredWithoutRestrictionsNestedInput
    giver?: ParticipantUpdateOneRequiredWithoutGiverRestrictionsNestedInput
    taker?: ParticipantUpdateOneRequiredWithoutTakerRestrictionsNestedInput
  }

  export type RestrictionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    blockedGiverId?: IntFieldUpdateOperationsInput | number
    blockedTakerId?: IntFieldUpdateOperationsInput | number
  }

  export type RestrictionCreateManyInput = {
    id?: number
    groupId: number
    blockedGiverId: number
    blockedTakerId: number
  }

  export type RestrictionUpdateManyMutationInput = {

  }

  export type RestrictionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    blockedGiverId?: IntFieldUpdateOperationsInput | number
    blockedTakerId?: IntFieldUpdateOperationsInput | number
  }

  export type DrawResultCreateInput = {
    createdAt?: Date | string
    pairs?: PairCreateNestedManyWithoutDrawInput
    group: GroupCreateNestedOneWithoutResultInput
  }

  export type DrawResultUncheckedCreateInput = {
    id?: number
    groupId: number
    createdAt?: Date | string
    pairs?: PairUncheckedCreateNestedManyWithoutDrawInput
  }

  export type DrawResultUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pairs?: PairUpdateManyWithoutDrawNestedInput
    group?: GroupUpdateOneRequiredWithoutResultNestedInput
  }

  export type DrawResultUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pairs?: PairUncheckedUpdateManyWithoutDrawNestedInput
  }

  export type DrawResultCreateManyInput = {
    id?: number
    groupId: number
    createdAt?: Date | string
  }

  export type DrawResultUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrawResultUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PairCreateInput = {
    draw: DrawResultCreateNestedOneWithoutPairsInput
    giver: ParticipantCreateNestedOneWithoutGiverPairsInput
    taker: ParticipantCreateNestedOneWithoutTakerPairsInput
  }

  export type PairUncheckedCreateInput = {
    id?: number
    drawId: number
    giverId: number
    takerId: number
  }

  export type PairUpdateInput = {
    draw?: DrawResultUpdateOneRequiredWithoutPairsNestedInput
    giver?: ParticipantUpdateOneRequiredWithoutGiverPairsNestedInput
    taker?: ParticipantUpdateOneRequiredWithoutTakerPairsNestedInput
  }

  export type PairUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    drawId?: IntFieldUpdateOperationsInput | number
    giverId?: IntFieldUpdateOperationsInput | number
    takerId?: IntFieldUpdateOperationsInput | number
  }

  export type PairCreateManyInput = {
    id?: number
    drawId: number
    giverId: number
    takerId: number
  }

  export type PairUpdateManyMutationInput = {

  }

  export type PairUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    drawId?: IntFieldUpdateOperationsInput | number
    giverId?: IntFieldUpdateOperationsInput | number
    takerId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationCreateInput = {
    type: $Enums.NotificationType
    message: string
    createdAt?: Date | string
    delivered?: boolean
    user: UserCreateNestedOneWithoutNotificationsInput
    group?: GroupCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    userId: number
    groupId?: number | null
    type: $Enums.NotificationType
    message: string
    createdAt?: Date | string
    delivered?: boolean
  }

  export type NotificationUpdateInput = {
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
    group?: GroupUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationCreateManyInput = {
    id?: number
    userId: number
    groupId?: number | null
    type: $Enums.NotificationType
    message: string
    createdAt?: Date | string
    delivered?: boolean
  }

  export type NotificationUpdateManyMutationInput = {
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type ParticipantListRelationFilter = {
    every?: ParticipantWhereInput
    some?: ParticipantWhereInput
    none?: ParticipantWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RestrictionListRelationFilter = {
    every?: RestrictionWhereInput
    some?: RestrictionWhereInput
    none?: RestrictionWhereInput
  }

  export type DrawResultNullableScalarRelationFilter = {
    is?: DrawResultWhereInput | null
    isNot?: DrawResultWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RestrictionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    inviteCode?: SortOrder
    minValue?: SortOrder
    maxValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type GroupAvgOrderByAggregateInput = {
    id?: SortOrder
    minValue?: SortOrder
    maxValue?: SortOrder
    ownerId?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    inviteCode?: SortOrder
    minValue?: SortOrder
    maxValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    inviteCode?: SortOrder
    minValue?: SortOrder
    maxValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type GroupSumOrderByAggregateInput = {
    id?: SortOrder
    minValue?: SortOrder
    maxValue?: SortOrder
    ownerId?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumParticipantStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantStatus | EnumParticipantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantStatusFilter<$PrismaModel> | $Enums.ParticipantStatus
  }

  export type GroupScalarRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type WishlistNullableScalarRelationFilter = {
    is?: WishlistWhereInput | null
    isNot?: WishlistWhereInput | null
  }

  export type PairListRelationFilter = {
    every?: PairWhereInput
    some?: PairWhereInput
    none?: PairWhereInput
  }

  export type PairOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ParticipantAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
  }

  export type ParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ParticipantSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
  }

  export type EnumParticipantStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantStatus | EnumParticipantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParticipantStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParticipantStatusFilter<$PrismaModel>
    _max?: NestedEnumParticipantStatusFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ParticipantScalarRelationFilter = {
    is?: ParticipantWhereInput
    isNot?: ParticipantWhereInput
  }

  export type WishlistCountOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
    items?: SortOrder
    updatedAt?: SortOrder
  }

  export type WishlistAvgOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
  }

  export type WishlistMaxOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
    updatedAt?: SortOrder
  }

  export type WishlistMinOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
    updatedAt?: SortOrder
  }

  export type WishlistSumOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type RestrictionCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    blockedGiverId?: SortOrder
    blockedTakerId?: SortOrder
  }

  export type RestrictionAvgOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    blockedGiverId?: SortOrder
    blockedTakerId?: SortOrder
  }

  export type RestrictionMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    blockedGiverId?: SortOrder
    blockedTakerId?: SortOrder
  }

  export type RestrictionMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    blockedGiverId?: SortOrder
    blockedTakerId?: SortOrder
  }

  export type RestrictionSumOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    blockedGiverId?: SortOrder
    blockedTakerId?: SortOrder
  }

  export type DrawResultCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
  }

  export type DrawResultAvgOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
  }

  export type DrawResultMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
  }

  export type DrawResultMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
  }

  export type DrawResultSumOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
  }

  export type DrawResultScalarRelationFilter = {
    is?: DrawResultWhereInput
    isNot?: DrawResultWhereInput
  }

  export type PairCountOrderByAggregateInput = {
    id?: SortOrder
    drawId?: SortOrder
    giverId?: SortOrder
    takerId?: SortOrder
  }

  export type PairAvgOrderByAggregateInput = {
    id?: SortOrder
    drawId?: SortOrder
    giverId?: SortOrder
    takerId?: SortOrder
  }

  export type PairMaxOrderByAggregateInput = {
    id?: SortOrder
    drawId?: SortOrder
    giverId?: SortOrder
    takerId?: SortOrder
  }

  export type PairMinOrderByAggregateInput = {
    id?: SortOrder
    drawId?: SortOrder
    giverId?: SortOrder
    takerId?: SortOrder
  }

  export type PairSumOrderByAggregateInput = {
    id?: SortOrder
    drawId?: SortOrder
    giverId?: SortOrder
    takerId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type GroupNullableScalarRelationFilter = {
    is?: GroupWhereInput | null
    isNot?: GroupWhereInput | null
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    delivered?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    delivered?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    delivered?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type GroupCreateNestedManyWithoutOwnerInput = {
    create?: XOR<GroupCreateWithoutOwnerInput, GroupUncheckedCreateWithoutOwnerInput> | GroupCreateWithoutOwnerInput[] | GroupUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutOwnerInput | GroupCreateOrConnectWithoutOwnerInput[]
    createMany?: GroupCreateManyOwnerInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type ParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<ParticipantCreateWithoutUserInput, ParticipantUncheckedCreateWithoutUserInput> | ParticipantCreateWithoutUserInput[] | ParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutUserInput | ParticipantCreateOrConnectWithoutUserInput[]
    createMany?: ParticipantCreateManyUserInputEnvelope
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<GroupCreateWithoutOwnerInput, GroupUncheckedCreateWithoutOwnerInput> | GroupCreateWithoutOwnerInput[] | GroupUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutOwnerInput | GroupCreateOrConnectWithoutOwnerInput[]
    createMany?: GroupCreateManyOwnerInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type ParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ParticipantCreateWithoutUserInput, ParticipantUncheckedCreateWithoutUserInput> | ParticipantCreateWithoutUserInput[] | ParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutUserInput | ParticipantCreateOrConnectWithoutUserInput[]
    createMany?: ParticipantCreateManyUserInputEnvelope
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GroupUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<GroupCreateWithoutOwnerInput, GroupUncheckedCreateWithoutOwnerInput> | GroupCreateWithoutOwnerInput[] | GroupUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutOwnerInput | GroupCreateOrConnectWithoutOwnerInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutOwnerInput | GroupUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: GroupCreateManyOwnerInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutOwnerInput | GroupUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutOwnerInput | GroupUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type ParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<ParticipantCreateWithoutUserInput, ParticipantUncheckedCreateWithoutUserInput> | ParticipantCreateWithoutUserInput[] | ParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutUserInput | ParticipantCreateOrConnectWithoutUserInput[]
    upsert?: ParticipantUpsertWithWhereUniqueWithoutUserInput | ParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ParticipantCreateManyUserInputEnvelope
    set?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    disconnect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    delete?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    update?: ParticipantUpdateWithWhereUniqueWithoutUserInput | ParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ParticipantUpdateManyWithWhereWithoutUserInput | ParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GroupUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<GroupCreateWithoutOwnerInput, GroupUncheckedCreateWithoutOwnerInput> | GroupCreateWithoutOwnerInput[] | GroupUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutOwnerInput | GroupCreateOrConnectWithoutOwnerInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutOwnerInput | GroupUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: GroupCreateManyOwnerInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutOwnerInput | GroupUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutOwnerInput | GroupUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type ParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ParticipantCreateWithoutUserInput, ParticipantUncheckedCreateWithoutUserInput> | ParticipantCreateWithoutUserInput[] | ParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutUserInput | ParticipantCreateOrConnectWithoutUserInput[]
    upsert?: ParticipantUpsertWithWhereUniqueWithoutUserInput | ParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ParticipantCreateManyUserInputEnvelope
    set?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    disconnect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    delete?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    update?: ParticipantUpdateWithWhereUniqueWithoutUserInput | ParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ParticipantUpdateManyWithWhereWithoutUserInput | ParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGroupsOwnedInput = {
    create?: XOR<UserCreateWithoutGroupsOwnedInput, UserUncheckedCreateWithoutGroupsOwnedInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupsOwnedInput
    connect?: UserWhereUniqueInput
  }

  export type ParticipantCreateNestedManyWithoutGroupInput = {
    create?: XOR<ParticipantCreateWithoutGroupInput, ParticipantUncheckedCreateWithoutGroupInput> | ParticipantCreateWithoutGroupInput[] | ParticipantUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutGroupInput | ParticipantCreateOrConnectWithoutGroupInput[]
    createMany?: ParticipantCreateManyGroupInputEnvelope
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
  }

  export type RestrictionCreateNestedManyWithoutGroupInput = {
    create?: XOR<RestrictionCreateWithoutGroupInput, RestrictionUncheckedCreateWithoutGroupInput> | RestrictionCreateWithoutGroupInput[] | RestrictionUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: RestrictionCreateOrConnectWithoutGroupInput | RestrictionCreateOrConnectWithoutGroupInput[]
    createMany?: RestrictionCreateManyGroupInputEnvelope
    connect?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
  }

  export type DrawResultCreateNestedOneWithoutGroupInput = {
    create?: XOR<DrawResultCreateWithoutGroupInput, DrawResultUncheckedCreateWithoutGroupInput>
    connectOrCreate?: DrawResultCreateOrConnectWithoutGroupInput
    connect?: DrawResultWhereUniqueInput
  }

  export type NotificationCreateNestedManyWithoutGroupInput = {
    create?: XOR<NotificationCreateWithoutGroupInput, NotificationUncheckedCreateWithoutGroupInput> | NotificationCreateWithoutGroupInput[] | NotificationUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutGroupInput | NotificationCreateOrConnectWithoutGroupInput[]
    createMany?: NotificationCreateManyGroupInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ParticipantUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<ParticipantCreateWithoutGroupInput, ParticipantUncheckedCreateWithoutGroupInput> | ParticipantCreateWithoutGroupInput[] | ParticipantUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutGroupInput | ParticipantCreateOrConnectWithoutGroupInput[]
    createMany?: ParticipantCreateManyGroupInputEnvelope
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
  }

  export type RestrictionUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<RestrictionCreateWithoutGroupInput, RestrictionUncheckedCreateWithoutGroupInput> | RestrictionCreateWithoutGroupInput[] | RestrictionUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: RestrictionCreateOrConnectWithoutGroupInput | RestrictionCreateOrConnectWithoutGroupInput[]
    createMany?: RestrictionCreateManyGroupInputEnvelope
    connect?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
  }

  export type DrawResultUncheckedCreateNestedOneWithoutGroupInput = {
    create?: XOR<DrawResultCreateWithoutGroupInput, DrawResultUncheckedCreateWithoutGroupInput>
    connectOrCreate?: DrawResultCreateOrConnectWithoutGroupInput
    connect?: DrawResultWhereUniqueInput
  }

  export type NotificationUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<NotificationCreateWithoutGroupInput, NotificationUncheckedCreateWithoutGroupInput> | NotificationCreateWithoutGroupInput[] | NotificationUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutGroupInput | NotificationCreateOrConnectWithoutGroupInput[]
    createMany?: NotificationCreateManyGroupInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutGroupsOwnedNestedInput = {
    create?: XOR<UserCreateWithoutGroupsOwnedInput, UserUncheckedCreateWithoutGroupsOwnedInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupsOwnedInput
    upsert?: UserUpsertWithoutGroupsOwnedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGroupsOwnedInput, UserUpdateWithoutGroupsOwnedInput>, UserUncheckedUpdateWithoutGroupsOwnedInput>
  }

  export type ParticipantUpdateManyWithoutGroupNestedInput = {
    create?: XOR<ParticipantCreateWithoutGroupInput, ParticipantUncheckedCreateWithoutGroupInput> | ParticipantCreateWithoutGroupInput[] | ParticipantUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutGroupInput | ParticipantCreateOrConnectWithoutGroupInput[]
    upsert?: ParticipantUpsertWithWhereUniqueWithoutGroupInput | ParticipantUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: ParticipantCreateManyGroupInputEnvelope
    set?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    disconnect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    delete?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    update?: ParticipantUpdateWithWhereUniqueWithoutGroupInput | ParticipantUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: ParticipantUpdateManyWithWhereWithoutGroupInput | ParticipantUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
  }

  export type RestrictionUpdateManyWithoutGroupNestedInput = {
    create?: XOR<RestrictionCreateWithoutGroupInput, RestrictionUncheckedCreateWithoutGroupInput> | RestrictionCreateWithoutGroupInput[] | RestrictionUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: RestrictionCreateOrConnectWithoutGroupInput | RestrictionCreateOrConnectWithoutGroupInput[]
    upsert?: RestrictionUpsertWithWhereUniqueWithoutGroupInput | RestrictionUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: RestrictionCreateManyGroupInputEnvelope
    set?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
    disconnect?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
    delete?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
    connect?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
    update?: RestrictionUpdateWithWhereUniqueWithoutGroupInput | RestrictionUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: RestrictionUpdateManyWithWhereWithoutGroupInput | RestrictionUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: RestrictionScalarWhereInput | RestrictionScalarWhereInput[]
  }

  export type DrawResultUpdateOneWithoutGroupNestedInput = {
    create?: XOR<DrawResultCreateWithoutGroupInput, DrawResultUncheckedCreateWithoutGroupInput>
    connectOrCreate?: DrawResultCreateOrConnectWithoutGroupInput
    upsert?: DrawResultUpsertWithoutGroupInput
    disconnect?: DrawResultWhereInput | boolean
    delete?: DrawResultWhereInput | boolean
    connect?: DrawResultWhereUniqueInput
    update?: XOR<XOR<DrawResultUpdateToOneWithWhereWithoutGroupInput, DrawResultUpdateWithoutGroupInput>, DrawResultUncheckedUpdateWithoutGroupInput>
  }

  export type NotificationUpdateManyWithoutGroupNestedInput = {
    create?: XOR<NotificationCreateWithoutGroupInput, NotificationUncheckedCreateWithoutGroupInput> | NotificationCreateWithoutGroupInput[] | NotificationUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutGroupInput | NotificationCreateOrConnectWithoutGroupInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutGroupInput | NotificationUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: NotificationCreateManyGroupInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutGroupInput | NotificationUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutGroupInput | NotificationUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ParticipantUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<ParticipantCreateWithoutGroupInput, ParticipantUncheckedCreateWithoutGroupInput> | ParticipantCreateWithoutGroupInput[] | ParticipantUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutGroupInput | ParticipantCreateOrConnectWithoutGroupInput[]
    upsert?: ParticipantUpsertWithWhereUniqueWithoutGroupInput | ParticipantUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: ParticipantCreateManyGroupInputEnvelope
    set?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    disconnect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    delete?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    update?: ParticipantUpdateWithWhereUniqueWithoutGroupInput | ParticipantUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: ParticipantUpdateManyWithWhereWithoutGroupInput | ParticipantUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
  }

  export type RestrictionUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<RestrictionCreateWithoutGroupInput, RestrictionUncheckedCreateWithoutGroupInput> | RestrictionCreateWithoutGroupInput[] | RestrictionUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: RestrictionCreateOrConnectWithoutGroupInput | RestrictionCreateOrConnectWithoutGroupInput[]
    upsert?: RestrictionUpsertWithWhereUniqueWithoutGroupInput | RestrictionUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: RestrictionCreateManyGroupInputEnvelope
    set?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
    disconnect?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
    delete?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
    connect?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
    update?: RestrictionUpdateWithWhereUniqueWithoutGroupInput | RestrictionUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: RestrictionUpdateManyWithWhereWithoutGroupInput | RestrictionUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: RestrictionScalarWhereInput | RestrictionScalarWhereInput[]
  }

  export type DrawResultUncheckedUpdateOneWithoutGroupNestedInput = {
    create?: XOR<DrawResultCreateWithoutGroupInput, DrawResultUncheckedCreateWithoutGroupInput>
    connectOrCreate?: DrawResultCreateOrConnectWithoutGroupInput
    upsert?: DrawResultUpsertWithoutGroupInput
    disconnect?: DrawResultWhereInput | boolean
    delete?: DrawResultWhereInput | boolean
    connect?: DrawResultWhereUniqueInput
    update?: XOR<XOR<DrawResultUpdateToOneWithWhereWithoutGroupInput, DrawResultUpdateWithoutGroupInput>, DrawResultUncheckedUpdateWithoutGroupInput>
  }

  export type NotificationUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<NotificationCreateWithoutGroupInput, NotificationUncheckedCreateWithoutGroupInput> | NotificationCreateWithoutGroupInput[] | NotificationUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutGroupInput | NotificationCreateOrConnectWithoutGroupInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutGroupInput | NotificationUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: NotificationCreateManyGroupInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutGroupInput | NotificationUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutGroupInput | NotificationUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<UserCreateWithoutParticipantsInput, UserUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipantsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<GroupCreateWithoutParticipantsInput, GroupUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutParticipantsInput
    connect?: GroupWhereUniqueInput
  }

  export type WishlistCreateNestedOneWithoutParticipantInput = {
    create?: XOR<WishlistCreateWithoutParticipantInput, WishlistUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: WishlistCreateOrConnectWithoutParticipantInput
    connect?: WishlistWhereUniqueInput
  }

  export type PairCreateNestedManyWithoutGiverInput = {
    create?: XOR<PairCreateWithoutGiverInput, PairUncheckedCreateWithoutGiverInput> | PairCreateWithoutGiverInput[] | PairUncheckedCreateWithoutGiverInput[]
    connectOrCreate?: PairCreateOrConnectWithoutGiverInput | PairCreateOrConnectWithoutGiverInput[]
    createMany?: PairCreateManyGiverInputEnvelope
    connect?: PairWhereUniqueInput | PairWhereUniqueInput[]
  }

  export type PairCreateNestedManyWithoutTakerInput = {
    create?: XOR<PairCreateWithoutTakerInput, PairUncheckedCreateWithoutTakerInput> | PairCreateWithoutTakerInput[] | PairUncheckedCreateWithoutTakerInput[]
    connectOrCreate?: PairCreateOrConnectWithoutTakerInput | PairCreateOrConnectWithoutTakerInput[]
    createMany?: PairCreateManyTakerInputEnvelope
    connect?: PairWhereUniqueInput | PairWhereUniqueInput[]
  }

  export type RestrictionCreateNestedManyWithoutGiverInput = {
    create?: XOR<RestrictionCreateWithoutGiverInput, RestrictionUncheckedCreateWithoutGiverInput> | RestrictionCreateWithoutGiverInput[] | RestrictionUncheckedCreateWithoutGiverInput[]
    connectOrCreate?: RestrictionCreateOrConnectWithoutGiverInput | RestrictionCreateOrConnectWithoutGiverInput[]
    createMany?: RestrictionCreateManyGiverInputEnvelope
    connect?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
  }

  export type RestrictionCreateNestedManyWithoutTakerInput = {
    create?: XOR<RestrictionCreateWithoutTakerInput, RestrictionUncheckedCreateWithoutTakerInput> | RestrictionCreateWithoutTakerInput[] | RestrictionUncheckedCreateWithoutTakerInput[]
    connectOrCreate?: RestrictionCreateOrConnectWithoutTakerInput | RestrictionCreateOrConnectWithoutTakerInput[]
    createMany?: RestrictionCreateManyTakerInputEnvelope
    connect?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
  }

  export type WishlistUncheckedCreateNestedOneWithoutParticipantInput = {
    create?: XOR<WishlistCreateWithoutParticipantInput, WishlistUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: WishlistCreateOrConnectWithoutParticipantInput
    connect?: WishlistWhereUniqueInput
  }

  export type PairUncheckedCreateNestedManyWithoutGiverInput = {
    create?: XOR<PairCreateWithoutGiverInput, PairUncheckedCreateWithoutGiverInput> | PairCreateWithoutGiverInput[] | PairUncheckedCreateWithoutGiverInput[]
    connectOrCreate?: PairCreateOrConnectWithoutGiverInput | PairCreateOrConnectWithoutGiverInput[]
    createMany?: PairCreateManyGiverInputEnvelope
    connect?: PairWhereUniqueInput | PairWhereUniqueInput[]
  }

  export type PairUncheckedCreateNestedManyWithoutTakerInput = {
    create?: XOR<PairCreateWithoutTakerInput, PairUncheckedCreateWithoutTakerInput> | PairCreateWithoutTakerInput[] | PairUncheckedCreateWithoutTakerInput[]
    connectOrCreate?: PairCreateOrConnectWithoutTakerInput | PairCreateOrConnectWithoutTakerInput[]
    createMany?: PairCreateManyTakerInputEnvelope
    connect?: PairWhereUniqueInput | PairWhereUniqueInput[]
  }

  export type RestrictionUncheckedCreateNestedManyWithoutGiverInput = {
    create?: XOR<RestrictionCreateWithoutGiverInput, RestrictionUncheckedCreateWithoutGiverInput> | RestrictionCreateWithoutGiverInput[] | RestrictionUncheckedCreateWithoutGiverInput[]
    connectOrCreate?: RestrictionCreateOrConnectWithoutGiverInput | RestrictionCreateOrConnectWithoutGiverInput[]
    createMany?: RestrictionCreateManyGiverInputEnvelope
    connect?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
  }

  export type RestrictionUncheckedCreateNestedManyWithoutTakerInput = {
    create?: XOR<RestrictionCreateWithoutTakerInput, RestrictionUncheckedCreateWithoutTakerInput> | RestrictionCreateWithoutTakerInput[] | RestrictionUncheckedCreateWithoutTakerInput[]
    connectOrCreate?: RestrictionCreateOrConnectWithoutTakerInput | RestrictionCreateOrConnectWithoutTakerInput[]
    createMany?: RestrictionCreateManyTakerInputEnvelope
    connect?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
  }

  export type EnumParticipantStatusFieldUpdateOperationsInput = {
    set?: $Enums.ParticipantStatus
  }

  export type UserUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<UserCreateWithoutParticipantsInput, UserUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipantsInput
    upsert?: UserUpsertWithoutParticipantsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParticipantsInput, UserUpdateWithoutParticipantsInput>, UserUncheckedUpdateWithoutParticipantsInput>
  }

  export type GroupUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<GroupCreateWithoutParticipantsInput, GroupUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutParticipantsInput
    upsert?: GroupUpsertWithoutParticipantsInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutParticipantsInput, GroupUpdateWithoutParticipantsInput>, GroupUncheckedUpdateWithoutParticipantsInput>
  }

  export type WishlistUpdateOneWithoutParticipantNestedInput = {
    create?: XOR<WishlistCreateWithoutParticipantInput, WishlistUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: WishlistCreateOrConnectWithoutParticipantInput
    upsert?: WishlistUpsertWithoutParticipantInput
    disconnect?: WishlistWhereInput | boolean
    delete?: WishlistWhereInput | boolean
    connect?: WishlistWhereUniqueInput
    update?: XOR<XOR<WishlistUpdateToOneWithWhereWithoutParticipantInput, WishlistUpdateWithoutParticipantInput>, WishlistUncheckedUpdateWithoutParticipantInput>
  }

  export type PairUpdateManyWithoutGiverNestedInput = {
    create?: XOR<PairCreateWithoutGiverInput, PairUncheckedCreateWithoutGiverInput> | PairCreateWithoutGiverInput[] | PairUncheckedCreateWithoutGiverInput[]
    connectOrCreate?: PairCreateOrConnectWithoutGiverInput | PairCreateOrConnectWithoutGiverInput[]
    upsert?: PairUpsertWithWhereUniqueWithoutGiverInput | PairUpsertWithWhereUniqueWithoutGiverInput[]
    createMany?: PairCreateManyGiverInputEnvelope
    set?: PairWhereUniqueInput | PairWhereUniqueInput[]
    disconnect?: PairWhereUniqueInput | PairWhereUniqueInput[]
    delete?: PairWhereUniqueInput | PairWhereUniqueInput[]
    connect?: PairWhereUniqueInput | PairWhereUniqueInput[]
    update?: PairUpdateWithWhereUniqueWithoutGiverInput | PairUpdateWithWhereUniqueWithoutGiverInput[]
    updateMany?: PairUpdateManyWithWhereWithoutGiverInput | PairUpdateManyWithWhereWithoutGiverInput[]
    deleteMany?: PairScalarWhereInput | PairScalarWhereInput[]
  }

  export type PairUpdateManyWithoutTakerNestedInput = {
    create?: XOR<PairCreateWithoutTakerInput, PairUncheckedCreateWithoutTakerInput> | PairCreateWithoutTakerInput[] | PairUncheckedCreateWithoutTakerInput[]
    connectOrCreate?: PairCreateOrConnectWithoutTakerInput | PairCreateOrConnectWithoutTakerInput[]
    upsert?: PairUpsertWithWhereUniqueWithoutTakerInput | PairUpsertWithWhereUniqueWithoutTakerInput[]
    createMany?: PairCreateManyTakerInputEnvelope
    set?: PairWhereUniqueInput | PairWhereUniqueInput[]
    disconnect?: PairWhereUniqueInput | PairWhereUniqueInput[]
    delete?: PairWhereUniqueInput | PairWhereUniqueInput[]
    connect?: PairWhereUniqueInput | PairWhereUniqueInput[]
    update?: PairUpdateWithWhereUniqueWithoutTakerInput | PairUpdateWithWhereUniqueWithoutTakerInput[]
    updateMany?: PairUpdateManyWithWhereWithoutTakerInput | PairUpdateManyWithWhereWithoutTakerInput[]
    deleteMany?: PairScalarWhereInput | PairScalarWhereInput[]
  }

  export type RestrictionUpdateManyWithoutGiverNestedInput = {
    create?: XOR<RestrictionCreateWithoutGiverInput, RestrictionUncheckedCreateWithoutGiverInput> | RestrictionCreateWithoutGiverInput[] | RestrictionUncheckedCreateWithoutGiverInput[]
    connectOrCreate?: RestrictionCreateOrConnectWithoutGiverInput | RestrictionCreateOrConnectWithoutGiverInput[]
    upsert?: RestrictionUpsertWithWhereUniqueWithoutGiverInput | RestrictionUpsertWithWhereUniqueWithoutGiverInput[]
    createMany?: RestrictionCreateManyGiverInputEnvelope
    set?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
    disconnect?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
    delete?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
    connect?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
    update?: RestrictionUpdateWithWhereUniqueWithoutGiverInput | RestrictionUpdateWithWhereUniqueWithoutGiverInput[]
    updateMany?: RestrictionUpdateManyWithWhereWithoutGiverInput | RestrictionUpdateManyWithWhereWithoutGiverInput[]
    deleteMany?: RestrictionScalarWhereInput | RestrictionScalarWhereInput[]
  }

  export type RestrictionUpdateManyWithoutTakerNestedInput = {
    create?: XOR<RestrictionCreateWithoutTakerInput, RestrictionUncheckedCreateWithoutTakerInput> | RestrictionCreateWithoutTakerInput[] | RestrictionUncheckedCreateWithoutTakerInput[]
    connectOrCreate?: RestrictionCreateOrConnectWithoutTakerInput | RestrictionCreateOrConnectWithoutTakerInput[]
    upsert?: RestrictionUpsertWithWhereUniqueWithoutTakerInput | RestrictionUpsertWithWhereUniqueWithoutTakerInput[]
    createMany?: RestrictionCreateManyTakerInputEnvelope
    set?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
    disconnect?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
    delete?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
    connect?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
    update?: RestrictionUpdateWithWhereUniqueWithoutTakerInput | RestrictionUpdateWithWhereUniqueWithoutTakerInput[]
    updateMany?: RestrictionUpdateManyWithWhereWithoutTakerInput | RestrictionUpdateManyWithWhereWithoutTakerInput[]
    deleteMany?: RestrictionScalarWhereInput | RestrictionScalarWhereInput[]
  }

  export type WishlistUncheckedUpdateOneWithoutParticipantNestedInput = {
    create?: XOR<WishlistCreateWithoutParticipantInput, WishlistUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: WishlistCreateOrConnectWithoutParticipantInput
    upsert?: WishlistUpsertWithoutParticipantInput
    disconnect?: WishlistWhereInput | boolean
    delete?: WishlistWhereInput | boolean
    connect?: WishlistWhereUniqueInput
    update?: XOR<XOR<WishlistUpdateToOneWithWhereWithoutParticipantInput, WishlistUpdateWithoutParticipantInput>, WishlistUncheckedUpdateWithoutParticipantInput>
  }

  export type PairUncheckedUpdateManyWithoutGiverNestedInput = {
    create?: XOR<PairCreateWithoutGiverInput, PairUncheckedCreateWithoutGiverInput> | PairCreateWithoutGiverInput[] | PairUncheckedCreateWithoutGiverInput[]
    connectOrCreate?: PairCreateOrConnectWithoutGiverInput | PairCreateOrConnectWithoutGiverInput[]
    upsert?: PairUpsertWithWhereUniqueWithoutGiverInput | PairUpsertWithWhereUniqueWithoutGiverInput[]
    createMany?: PairCreateManyGiverInputEnvelope
    set?: PairWhereUniqueInput | PairWhereUniqueInput[]
    disconnect?: PairWhereUniqueInput | PairWhereUniqueInput[]
    delete?: PairWhereUniqueInput | PairWhereUniqueInput[]
    connect?: PairWhereUniqueInput | PairWhereUniqueInput[]
    update?: PairUpdateWithWhereUniqueWithoutGiverInput | PairUpdateWithWhereUniqueWithoutGiverInput[]
    updateMany?: PairUpdateManyWithWhereWithoutGiverInput | PairUpdateManyWithWhereWithoutGiverInput[]
    deleteMany?: PairScalarWhereInput | PairScalarWhereInput[]
  }

  export type PairUncheckedUpdateManyWithoutTakerNestedInput = {
    create?: XOR<PairCreateWithoutTakerInput, PairUncheckedCreateWithoutTakerInput> | PairCreateWithoutTakerInput[] | PairUncheckedCreateWithoutTakerInput[]
    connectOrCreate?: PairCreateOrConnectWithoutTakerInput | PairCreateOrConnectWithoutTakerInput[]
    upsert?: PairUpsertWithWhereUniqueWithoutTakerInput | PairUpsertWithWhereUniqueWithoutTakerInput[]
    createMany?: PairCreateManyTakerInputEnvelope
    set?: PairWhereUniqueInput | PairWhereUniqueInput[]
    disconnect?: PairWhereUniqueInput | PairWhereUniqueInput[]
    delete?: PairWhereUniqueInput | PairWhereUniqueInput[]
    connect?: PairWhereUniqueInput | PairWhereUniqueInput[]
    update?: PairUpdateWithWhereUniqueWithoutTakerInput | PairUpdateWithWhereUniqueWithoutTakerInput[]
    updateMany?: PairUpdateManyWithWhereWithoutTakerInput | PairUpdateManyWithWhereWithoutTakerInput[]
    deleteMany?: PairScalarWhereInput | PairScalarWhereInput[]
  }

  export type RestrictionUncheckedUpdateManyWithoutGiverNestedInput = {
    create?: XOR<RestrictionCreateWithoutGiverInput, RestrictionUncheckedCreateWithoutGiverInput> | RestrictionCreateWithoutGiverInput[] | RestrictionUncheckedCreateWithoutGiverInput[]
    connectOrCreate?: RestrictionCreateOrConnectWithoutGiverInput | RestrictionCreateOrConnectWithoutGiverInput[]
    upsert?: RestrictionUpsertWithWhereUniqueWithoutGiverInput | RestrictionUpsertWithWhereUniqueWithoutGiverInput[]
    createMany?: RestrictionCreateManyGiverInputEnvelope
    set?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
    disconnect?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
    delete?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
    connect?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
    update?: RestrictionUpdateWithWhereUniqueWithoutGiverInput | RestrictionUpdateWithWhereUniqueWithoutGiverInput[]
    updateMany?: RestrictionUpdateManyWithWhereWithoutGiverInput | RestrictionUpdateManyWithWhereWithoutGiverInput[]
    deleteMany?: RestrictionScalarWhereInput | RestrictionScalarWhereInput[]
  }

  export type RestrictionUncheckedUpdateManyWithoutTakerNestedInput = {
    create?: XOR<RestrictionCreateWithoutTakerInput, RestrictionUncheckedCreateWithoutTakerInput> | RestrictionCreateWithoutTakerInput[] | RestrictionUncheckedCreateWithoutTakerInput[]
    connectOrCreate?: RestrictionCreateOrConnectWithoutTakerInput | RestrictionCreateOrConnectWithoutTakerInput[]
    upsert?: RestrictionUpsertWithWhereUniqueWithoutTakerInput | RestrictionUpsertWithWhereUniqueWithoutTakerInput[]
    createMany?: RestrictionCreateManyTakerInputEnvelope
    set?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
    disconnect?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
    delete?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
    connect?: RestrictionWhereUniqueInput | RestrictionWhereUniqueInput[]
    update?: RestrictionUpdateWithWhereUniqueWithoutTakerInput | RestrictionUpdateWithWhereUniqueWithoutTakerInput[]
    updateMany?: RestrictionUpdateManyWithWhereWithoutTakerInput | RestrictionUpdateManyWithWhereWithoutTakerInput[]
    deleteMany?: RestrictionScalarWhereInput | RestrictionScalarWhereInput[]
  }

  export type ParticipantCreateNestedOneWithoutWishlistInput = {
    create?: XOR<ParticipantCreateWithoutWishlistInput, ParticipantUncheckedCreateWithoutWishlistInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutWishlistInput
    connect?: ParticipantWhereUniqueInput
  }

  export type ParticipantUpdateOneRequiredWithoutWishlistNestedInput = {
    create?: XOR<ParticipantCreateWithoutWishlistInput, ParticipantUncheckedCreateWithoutWishlistInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutWishlistInput
    upsert?: ParticipantUpsertWithoutWishlistInput
    connect?: ParticipantWhereUniqueInput
    update?: XOR<XOR<ParticipantUpdateToOneWithWhereWithoutWishlistInput, ParticipantUpdateWithoutWishlistInput>, ParticipantUncheckedUpdateWithoutWishlistInput>
  }

  export type GroupCreateNestedOneWithoutRestrictionsInput = {
    create?: XOR<GroupCreateWithoutRestrictionsInput, GroupUncheckedCreateWithoutRestrictionsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutRestrictionsInput
    connect?: GroupWhereUniqueInput
  }

  export type ParticipantCreateNestedOneWithoutGiverRestrictionsInput = {
    create?: XOR<ParticipantCreateWithoutGiverRestrictionsInput, ParticipantUncheckedCreateWithoutGiverRestrictionsInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutGiverRestrictionsInput
    connect?: ParticipantWhereUniqueInput
  }

  export type ParticipantCreateNestedOneWithoutTakerRestrictionsInput = {
    create?: XOR<ParticipantCreateWithoutTakerRestrictionsInput, ParticipantUncheckedCreateWithoutTakerRestrictionsInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutTakerRestrictionsInput
    connect?: ParticipantWhereUniqueInput
  }

  export type GroupUpdateOneRequiredWithoutRestrictionsNestedInput = {
    create?: XOR<GroupCreateWithoutRestrictionsInput, GroupUncheckedCreateWithoutRestrictionsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutRestrictionsInput
    upsert?: GroupUpsertWithoutRestrictionsInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutRestrictionsInput, GroupUpdateWithoutRestrictionsInput>, GroupUncheckedUpdateWithoutRestrictionsInput>
  }

  export type ParticipantUpdateOneRequiredWithoutGiverRestrictionsNestedInput = {
    create?: XOR<ParticipantCreateWithoutGiverRestrictionsInput, ParticipantUncheckedCreateWithoutGiverRestrictionsInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutGiverRestrictionsInput
    upsert?: ParticipantUpsertWithoutGiverRestrictionsInput
    connect?: ParticipantWhereUniqueInput
    update?: XOR<XOR<ParticipantUpdateToOneWithWhereWithoutGiverRestrictionsInput, ParticipantUpdateWithoutGiverRestrictionsInput>, ParticipantUncheckedUpdateWithoutGiverRestrictionsInput>
  }

  export type ParticipantUpdateOneRequiredWithoutTakerRestrictionsNestedInput = {
    create?: XOR<ParticipantCreateWithoutTakerRestrictionsInput, ParticipantUncheckedCreateWithoutTakerRestrictionsInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutTakerRestrictionsInput
    upsert?: ParticipantUpsertWithoutTakerRestrictionsInput
    connect?: ParticipantWhereUniqueInput
    update?: XOR<XOR<ParticipantUpdateToOneWithWhereWithoutTakerRestrictionsInput, ParticipantUpdateWithoutTakerRestrictionsInput>, ParticipantUncheckedUpdateWithoutTakerRestrictionsInput>
  }

  export type PairCreateNestedManyWithoutDrawInput = {
    create?: XOR<PairCreateWithoutDrawInput, PairUncheckedCreateWithoutDrawInput> | PairCreateWithoutDrawInput[] | PairUncheckedCreateWithoutDrawInput[]
    connectOrCreate?: PairCreateOrConnectWithoutDrawInput | PairCreateOrConnectWithoutDrawInput[]
    createMany?: PairCreateManyDrawInputEnvelope
    connect?: PairWhereUniqueInput | PairWhereUniqueInput[]
  }

  export type GroupCreateNestedOneWithoutResultInput = {
    create?: XOR<GroupCreateWithoutResultInput, GroupUncheckedCreateWithoutResultInput>
    connectOrCreate?: GroupCreateOrConnectWithoutResultInput
    connect?: GroupWhereUniqueInput
  }

  export type PairUncheckedCreateNestedManyWithoutDrawInput = {
    create?: XOR<PairCreateWithoutDrawInput, PairUncheckedCreateWithoutDrawInput> | PairCreateWithoutDrawInput[] | PairUncheckedCreateWithoutDrawInput[]
    connectOrCreate?: PairCreateOrConnectWithoutDrawInput | PairCreateOrConnectWithoutDrawInput[]
    createMany?: PairCreateManyDrawInputEnvelope
    connect?: PairWhereUniqueInput | PairWhereUniqueInput[]
  }

  export type PairUpdateManyWithoutDrawNestedInput = {
    create?: XOR<PairCreateWithoutDrawInput, PairUncheckedCreateWithoutDrawInput> | PairCreateWithoutDrawInput[] | PairUncheckedCreateWithoutDrawInput[]
    connectOrCreate?: PairCreateOrConnectWithoutDrawInput | PairCreateOrConnectWithoutDrawInput[]
    upsert?: PairUpsertWithWhereUniqueWithoutDrawInput | PairUpsertWithWhereUniqueWithoutDrawInput[]
    createMany?: PairCreateManyDrawInputEnvelope
    set?: PairWhereUniqueInput | PairWhereUniqueInput[]
    disconnect?: PairWhereUniqueInput | PairWhereUniqueInput[]
    delete?: PairWhereUniqueInput | PairWhereUniqueInput[]
    connect?: PairWhereUniqueInput | PairWhereUniqueInput[]
    update?: PairUpdateWithWhereUniqueWithoutDrawInput | PairUpdateWithWhereUniqueWithoutDrawInput[]
    updateMany?: PairUpdateManyWithWhereWithoutDrawInput | PairUpdateManyWithWhereWithoutDrawInput[]
    deleteMany?: PairScalarWhereInput | PairScalarWhereInput[]
  }

  export type GroupUpdateOneRequiredWithoutResultNestedInput = {
    create?: XOR<GroupCreateWithoutResultInput, GroupUncheckedCreateWithoutResultInput>
    connectOrCreate?: GroupCreateOrConnectWithoutResultInput
    upsert?: GroupUpsertWithoutResultInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutResultInput, GroupUpdateWithoutResultInput>, GroupUncheckedUpdateWithoutResultInput>
  }

  export type PairUncheckedUpdateManyWithoutDrawNestedInput = {
    create?: XOR<PairCreateWithoutDrawInput, PairUncheckedCreateWithoutDrawInput> | PairCreateWithoutDrawInput[] | PairUncheckedCreateWithoutDrawInput[]
    connectOrCreate?: PairCreateOrConnectWithoutDrawInput | PairCreateOrConnectWithoutDrawInput[]
    upsert?: PairUpsertWithWhereUniqueWithoutDrawInput | PairUpsertWithWhereUniqueWithoutDrawInput[]
    createMany?: PairCreateManyDrawInputEnvelope
    set?: PairWhereUniqueInput | PairWhereUniqueInput[]
    disconnect?: PairWhereUniqueInput | PairWhereUniqueInput[]
    delete?: PairWhereUniqueInput | PairWhereUniqueInput[]
    connect?: PairWhereUniqueInput | PairWhereUniqueInput[]
    update?: PairUpdateWithWhereUniqueWithoutDrawInput | PairUpdateWithWhereUniqueWithoutDrawInput[]
    updateMany?: PairUpdateManyWithWhereWithoutDrawInput | PairUpdateManyWithWhereWithoutDrawInput[]
    deleteMany?: PairScalarWhereInput | PairScalarWhereInput[]
  }

  export type DrawResultCreateNestedOneWithoutPairsInput = {
    create?: XOR<DrawResultCreateWithoutPairsInput, DrawResultUncheckedCreateWithoutPairsInput>
    connectOrCreate?: DrawResultCreateOrConnectWithoutPairsInput
    connect?: DrawResultWhereUniqueInput
  }

  export type ParticipantCreateNestedOneWithoutGiverPairsInput = {
    create?: XOR<ParticipantCreateWithoutGiverPairsInput, ParticipantUncheckedCreateWithoutGiverPairsInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutGiverPairsInput
    connect?: ParticipantWhereUniqueInput
  }

  export type ParticipantCreateNestedOneWithoutTakerPairsInput = {
    create?: XOR<ParticipantCreateWithoutTakerPairsInput, ParticipantUncheckedCreateWithoutTakerPairsInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutTakerPairsInput
    connect?: ParticipantWhereUniqueInput
  }

  export type DrawResultUpdateOneRequiredWithoutPairsNestedInput = {
    create?: XOR<DrawResultCreateWithoutPairsInput, DrawResultUncheckedCreateWithoutPairsInput>
    connectOrCreate?: DrawResultCreateOrConnectWithoutPairsInput
    upsert?: DrawResultUpsertWithoutPairsInput
    connect?: DrawResultWhereUniqueInput
    update?: XOR<XOR<DrawResultUpdateToOneWithWhereWithoutPairsInput, DrawResultUpdateWithoutPairsInput>, DrawResultUncheckedUpdateWithoutPairsInput>
  }

  export type ParticipantUpdateOneRequiredWithoutGiverPairsNestedInput = {
    create?: XOR<ParticipantCreateWithoutGiverPairsInput, ParticipantUncheckedCreateWithoutGiverPairsInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutGiverPairsInput
    upsert?: ParticipantUpsertWithoutGiverPairsInput
    connect?: ParticipantWhereUniqueInput
    update?: XOR<XOR<ParticipantUpdateToOneWithWhereWithoutGiverPairsInput, ParticipantUpdateWithoutGiverPairsInput>, ParticipantUncheckedUpdateWithoutGiverPairsInput>
  }

  export type ParticipantUpdateOneRequiredWithoutTakerPairsNestedInput = {
    create?: XOR<ParticipantCreateWithoutTakerPairsInput, ParticipantUncheckedCreateWithoutTakerPairsInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutTakerPairsInput
    upsert?: ParticipantUpsertWithoutTakerPairsInput
    connect?: ParticipantWhereUniqueInput
    update?: XOR<XOR<ParticipantUpdateToOneWithWhereWithoutTakerPairsInput, ParticipantUpdateWithoutTakerPairsInput>, ParticipantUncheckedUpdateWithoutTakerPairsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<GroupCreateWithoutNotificationsInput, GroupUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutNotificationsInput
    connect?: GroupWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type GroupUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<GroupCreateWithoutNotificationsInput, GroupUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutNotificationsInput
    upsert?: GroupUpsertWithoutNotificationsInput
    disconnect?: GroupWhereInput | boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutNotificationsInput, GroupUpdateWithoutNotificationsInput>, GroupUncheckedUpdateWithoutNotificationsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumParticipantStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantStatus | EnumParticipantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantStatusFilter<$PrismaModel> | $Enums.ParticipantStatus
  }

  export type NestedEnumParticipantStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantStatus | EnumParticipantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParticipantStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParticipantStatusFilter<$PrismaModel>
    _max?: NestedEnumParticipantStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type GroupCreateWithoutOwnerInput = {
    name: string
    description?: string | null
    inviteCode: string
    minValue?: number | null
    maxValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: ParticipantCreateNestedManyWithoutGroupInput
    restrictions?: RestrictionCreateNestedManyWithoutGroupInput
    result?: DrawResultCreateNestedOneWithoutGroupInput
    notifications?: NotificationCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutOwnerInput = {
    id?: number
    name: string
    description?: string | null
    inviteCode: string
    minValue?: number | null
    maxValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: ParticipantUncheckedCreateNestedManyWithoutGroupInput
    restrictions?: RestrictionUncheckedCreateNestedManyWithoutGroupInput
    result?: DrawResultUncheckedCreateNestedOneWithoutGroupInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutOwnerInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutOwnerInput, GroupUncheckedCreateWithoutOwnerInput>
  }

  export type GroupCreateManyOwnerInputEnvelope = {
    data: GroupCreateManyOwnerInput | GroupCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type ParticipantCreateWithoutUserInput = {
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
    group: GroupCreateNestedOneWithoutParticipantsInput
    wishlist?: WishlistCreateNestedOneWithoutParticipantInput
    giverPairs?: PairCreateNestedManyWithoutGiverInput
    takerPairs?: PairCreateNestedManyWithoutTakerInput
    giverRestrictions?: RestrictionCreateNestedManyWithoutGiverInput
    takerRestrictions?: RestrictionCreateNestedManyWithoutTakerInput
  }

  export type ParticipantUncheckedCreateWithoutUserInput = {
    id?: number
    groupId: number
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
    wishlist?: WishlistUncheckedCreateNestedOneWithoutParticipantInput
    giverPairs?: PairUncheckedCreateNestedManyWithoutGiverInput
    takerPairs?: PairUncheckedCreateNestedManyWithoutTakerInput
    giverRestrictions?: RestrictionUncheckedCreateNestedManyWithoutGiverInput
    takerRestrictions?: RestrictionUncheckedCreateNestedManyWithoutTakerInput
  }

  export type ParticipantCreateOrConnectWithoutUserInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutUserInput, ParticipantUncheckedCreateWithoutUserInput>
  }

  export type ParticipantCreateManyUserInputEnvelope = {
    data: ParticipantCreateManyUserInput | ParticipantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    type: $Enums.NotificationType
    message: string
    createdAt?: Date | string
    delivered?: boolean
    group?: GroupCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: number
    groupId?: number | null
    type: $Enums.NotificationType
    message: string
    createdAt?: Date | string
    delivered?: boolean
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GroupUpsertWithWhereUniqueWithoutOwnerInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutOwnerInput, GroupUncheckedUpdateWithoutOwnerInput>
    create: XOR<GroupCreateWithoutOwnerInput, GroupUncheckedCreateWithoutOwnerInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutOwnerInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutOwnerInput, GroupUncheckedUpdateWithoutOwnerInput>
  }

  export type GroupUpdateManyWithWhereWithoutOwnerInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutOwnerInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    id?: IntFilter<"Group"> | number
    name?: StringFilter<"Group"> | string
    description?: StringNullableFilter<"Group"> | string | null
    inviteCode?: StringFilter<"Group"> | string
    minValue?: FloatNullableFilter<"Group"> | number | null
    maxValue?: FloatNullableFilter<"Group"> | number | null
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    ownerId?: IntFilter<"Group"> | number
  }

  export type ParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: ParticipantWhereUniqueInput
    update: XOR<ParticipantUpdateWithoutUserInput, ParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<ParticipantCreateWithoutUserInput, ParticipantUncheckedCreateWithoutUserInput>
  }

  export type ParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: ParticipantWhereUniqueInput
    data: XOR<ParticipantUpdateWithoutUserInput, ParticipantUncheckedUpdateWithoutUserInput>
  }

  export type ParticipantUpdateManyWithWhereWithoutUserInput = {
    where: ParticipantScalarWhereInput
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyWithoutUserInput>
  }

  export type ParticipantScalarWhereInput = {
    AND?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
    OR?: ParticipantScalarWhereInput[]
    NOT?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
    id?: IntFilter<"Participant"> | number
    userId?: IntFilter<"Participant"> | number
    groupId?: IntFilter<"Participant"> | number
    status?: EnumParticipantStatusFilter<"Participant"> | $Enums.ParticipantStatus
    createdAt?: DateTimeFilter<"Participant"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntFilter<"Notification"> | number
    groupId?: IntNullableFilter<"Notification"> | number | null
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    message?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    delivered?: BoolFilter<"Notification"> | boolean
  }

  export type UserCreateWithoutGroupsOwnedInput = {
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: ParticipantCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGroupsOwnedInput = {
    id?: number
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: ParticipantUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGroupsOwnedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupsOwnedInput, UserUncheckedCreateWithoutGroupsOwnedInput>
  }

  export type ParticipantCreateWithoutGroupInput = {
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutParticipantsInput
    wishlist?: WishlistCreateNestedOneWithoutParticipantInput
    giverPairs?: PairCreateNestedManyWithoutGiverInput
    takerPairs?: PairCreateNestedManyWithoutTakerInput
    giverRestrictions?: RestrictionCreateNestedManyWithoutGiverInput
    takerRestrictions?: RestrictionCreateNestedManyWithoutTakerInput
  }

  export type ParticipantUncheckedCreateWithoutGroupInput = {
    id?: number
    userId: number
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
    wishlist?: WishlistUncheckedCreateNestedOneWithoutParticipantInput
    giverPairs?: PairUncheckedCreateNestedManyWithoutGiverInput
    takerPairs?: PairUncheckedCreateNestedManyWithoutTakerInput
    giverRestrictions?: RestrictionUncheckedCreateNestedManyWithoutGiverInput
    takerRestrictions?: RestrictionUncheckedCreateNestedManyWithoutTakerInput
  }

  export type ParticipantCreateOrConnectWithoutGroupInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutGroupInput, ParticipantUncheckedCreateWithoutGroupInput>
  }

  export type ParticipantCreateManyGroupInputEnvelope = {
    data: ParticipantCreateManyGroupInput | ParticipantCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type RestrictionCreateWithoutGroupInput = {
    giver: ParticipantCreateNestedOneWithoutGiverRestrictionsInput
    taker: ParticipantCreateNestedOneWithoutTakerRestrictionsInput
  }

  export type RestrictionUncheckedCreateWithoutGroupInput = {
    id?: number
    blockedGiverId: number
    blockedTakerId: number
  }

  export type RestrictionCreateOrConnectWithoutGroupInput = {
    where: RestrictionWhereUniqueInput
    create: XOR<RestrictionCreateWithoutGroupInput, RestrictionUncheckedCreateWithoutGroupInput>
  }

  export type RestrictionCreateManyGroupInputEnvelope = {
    data: RestrictionCreateManyGroupInput | RestrictionCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type DrawResultCreateWithoutGroupInput = {
    createdAt?: Date | string
    pairs?: PairCreateNestedManyWithoutDrawInput
  }

  export type DrawResultUncheckedCreateWithoutGroupInput = {
    id?: number
    createdAt?: Date | string
    pairs?: PairUncheckedCreateNestedManyWithoutDrawInput
  }

  export type DrawResultCreateOrConnectWithoutGroupInput = {
    where: DrawResultWhereUniqueInput
    create: XOR<DrawResultCreateWithoutGroupInput, DrawResultUncheckedCreateWithoutGroupInput>
  }

  export type NotificationCreateWithoutGroupInput = {
    type: $Enums.NotificationType
    message: string
    createdAt?: Date | string
    delivered?: boolean
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutGroupInput = {
    id?: number
    userId: number
    type: $Enums.NotificationType
    message: string
    createdAt?: Date | string
    delivered?: boolean
  }

  export type NotificationCreateOrConnectWithoutGroupInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutGroupInput, NotificationUncheckedCreateWithoutGroupInput>
  }

  export type NotificationCreateManyGroupInputEnvelope = {
    data: NotificationCreateManyGroupInput | NotificationCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGroupsOwnedInput = {
    update: XOR<UserUpdateWithoutGroupsOwnedInput, UserUncheckedUpdateWithoutGroupsOwnedInput>
    create: XOR<UserCreateWithoutGroupsOwnedInput, UserUncheckedCreateWithoutGroupsOwnedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGroupsOwnedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGroupsOwnedInput, UserUncheckedUpdateWithoutGroupsOwnedInput>
  }

  export type UserUpdateWithoutGroupsOwnedInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ParticipantUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupsOwnedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ParticipantUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ParticipantUpsertWithWhereUniqueWithoutGroupInput = {
    where: ParticipantWhereUniqueInput
    update: XOR<ParticipantUpdateWithoutGroupInput, ParticipantUncheckedUpdateWithoutGroupInput>
    create: XOR<ParticipantCreateWithoutGroupInput, ParticipantUncheckedCreateWithoutGroupInput>
  }

  export type ParticipantUpdateWithWhereUniqueWithoutGroupInput = {
    where: ParticipantWhereUniqueInput
    data: XOR<ParticipantUpdateWithoutGroupInput, ParticipantUncheckedUpdateWithoutGroupInput>
  }

  export type ParticipantUpdateManyWithWhereWithoutGroupInput = {
    where: ParticipantScalarWhereInput
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyWithoutGroupInput>
  }

  export type RestrictionUpsertWithWhereUniqueWithoutGroupInput = {
    where: RestrictionWhereUniqueInput
    update: XOR<RestrictionUpdateWithoutGroupInput, RestrictionUncheckedUpdateWithoutGroupInput>
    create: XOR<RestrictionCreateWithoutGroupInput, RestrictionUncheckedCreateWithoutGroupInput>
  }

  export type RestrictionUpdateWithWhereUniqueWithoutGroupInput = {
    where: RestrictionWhereUniqueInput
    data: XOR<RestrictionUpdateWithoutGroupInput, RestrictionUncheckedUpdateWithoutGroupInput>
  }

  export type RestrictionUpdateManyWithWhereWithoutGroupInput = {
    where: RestrictionScalarWhereInput
    data: XOR<RestrictionUpdateManyMutationInput, RestrictionUncheckedUpdateManyWithoutGroupInput>
  }

  export type RestrictionScalarWhereInput = {
    AND?: RestrictionScalarWhereInput | RestrictionScalarWhereInput[]
    OR?: RestrictionScalarWhereInput[]
    NOT?: RestrictionScalarWhereInput | RestrictionScalarWhereInput[]
    id?: IntFilter<"Restriction"> | number
    groupId?: IntFilter<"Restriction"> | number
    blockedGiverId?: IntFilter<"Restriction"> | number
    blockedTakerId?: IntFilter<"Restriction"> | number
  }

  export type DrawResultUpsertWithoutGroupInput = {
    update: XOR<DrawResultUpdateWithoutGroupInput, DrawResultUncheckedUpdateWithoutGroupInput>
    create: XOR<DrawResultCreateWithoutGroupInput, DrawResultUncheckedCreateWithoutGroupInput>
    where?: DrawResultWhereInput
  }

  export type DrawResultUpdateToOneWithWhereWithoutGroupInput = {
    where?: DrawResultWhereInput
    data: XOR<DrawResultUpdateWithoutGroupInput, DrawResultUncheckedUpdateWithoutGroupInput>
  }

  export type DrawResultUpdateWithoutGroupInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pairs?: PairUpdateManyWithoutDrawNestedInput
  }

  export type DrawResultUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pairs?: PairUncheckedUpdateManyWithoutDrawNestedInput
  }

  export type NotificationUpsertWithWhereUniqueWithoutGroupInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutGroupInput, NotificationUncheckedUpdateWithoutGroupInput>
    create: XOR<NotificationCreateWithoutGroupInput, NotificationUncheckedCreateWithoutGroupInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutGroupInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutGroupInput, NotificationUncheckedUpdateWithoutGroupInput>
  }

  export type NotificationUpdateManyWithWhereWithoutGroupInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutGroupInput>
  }

  export type UserCreateWithoutParticipantsInput = {
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupsOwned?: GroupCreateNestedManyWithoutOwnerInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutParticipantsInput = {
    id?: number
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupsOwned?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutParticipantsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParticipantsInput, UserUncheckedCreateWithoutParticipantsInput>
  }

  export type GroupCreateWithoutParticipantsInput = {
    name: string
    description?: string | null
    inviteCode: string
    minValue?: number | null
    maxValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutGroupsOwnedInput
    restrictions?: RestrictionCreateNestedManyWithoutGroupInput
    result?: DrawResultCreateNestedOneWithoutGroupInput
    notifications?: NotificationCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutParticipantsInput = {
    id?: number
    name: string
    description?: string | null
    inviteCode: string
    minValue?: number | null
    maxValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
    restrictions?: RestrictionUncheckedCreateNestedManyWithoutGroupInput
    result?: DrawResultUncheckedCreateNestedOneWithoutGroupInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutParticipantsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutParticipantsInput, GroupUncheckedCreateWithoutParticipantsInput>
  }

  export type WishlistCreateWithoutParticipantInput = {
    items: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type WishlistUncheckedCreateWithoutParticipantInput = {
    id?: number
    items: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type WishlistCreateOrConnectWithoutParticipantInput = {
    where: WishlistWhereUniqueInput
    create: XOR<WishlistCreateWithoutParticipantInput, WishlistUncheckedCreateWithoutParticipantInput>
  }

  export type PairCreateWithoutGiverInput = {
    draw: DrawResultCreateNestedOneWithoutPairsInput
    taker: ParticipantCreateNestedOneWithoutTakerPairsInput
  }

  export type PairUncheckedCreateWithoutGiverInput = {
    id?: number
    drawId: number
    takerId: number
  }

  export type PairCreateOrConnectWithoutGiverInput = {
    where: PairWhereUniqueInput
    create: XOR<PairCreateWithoutGiverInput, PairUncheckedCreateWithoutGiverInput>
  }

  export type PairCreateManyGiverInputEnvelope = {
    data: PairCreateManyGiverInput | PairCreateManyGiverInput[]
    skipDuplicates?: boolean
  }

  export type PairCreateWithoutTakerInput = {
    draw: DrawResultCreateNestedOneWithoutPairsInput
    giver: ParticipantCreateNestedOneWithoutGiverPairsInput
  }

  export type PairUncheckedCreateWithoutTakerInput = {
    id?: number
    drawId: number
    giverId: number
  }

  export type PairCreateOrConnectWithoutTakerInput = {
    where: PairWhereUniqueInput
    create: XOR<PairCreateWithoutTakerInput, PairUncheckedCreateWithoutTakerInput>
  }

  export type PairCreateManyTakerInputEnvelope = {
    data: PairCreateManyTakerInput | PairCreateManyTakerInput[]
    skipDuplicates?: boolean
  }

  export type RestrictionCreateWithoutGiverInput = {
    group: GroupCreateNestedOneWithoutRestrictionsInput
    taker: ParticipantCreateNestedOneWithoutTakerRestrictionsInput
  }

  export type RestrictionUncheckedCreateWithoutGiverInput = {
    id?: number
    groupId: number
    blockedTakerId: number
  }

  export type RestrictionCreateOrConnectWithoutGiverInput = {
    where: RestrictionWhereUniqueInput
    create: XOR<RestrictionCreateWithoutGiverInput, RestrictionUncheckedCreateWithoutGiverInput>
  }

  export type RestrictionCreateManyGiverInputEnvelope = {
    data: RestrictionCreateManyGiverInput | RestrictionCreateManyGiverInput[]
    skipDuplicates?: boolean
  }

  export type RestrictionCreateWithoutTakerInput = {
    group: GroupCreateNestedOneWithoutRestrictionsInput
    giver: ParticipantCreateNestedOneWithoutGiverRestrictionsInput
  }

  export type RestrictionUncheckedCreateWithoutTakerInput = {
    id?: number
    groupId: number
    blockedGiverId: number
  }

  export type RestrictionCreateOrConnectWithoutTakerInput = {
    where: RestrictionWhereUniqueInput
    create: XOR<RestrictionCreateWithoutTakerInput, RestrictionUncheckedCreateWithoutTakerInput>
  }

  export type RestrictionCreateManyTakerInputEnvelope = {
    data: RestrictionCreateManyTakerInput | RestrictionCreateManyTakerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutParticipantsInput = {
    update: XOR<UserUpdateWithoutParticipantsInput, UserUncheckedUpdateWithoutParticipantsInput>
    create: XOR<UserCreateWithoutParticipantsInput, UserUncheckedCreateWithoutParticipantsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParticipantsInput, UserUncheckedUpdateWithoutParticipantsInput>
  }

  export type UserUpdateWithoutParticipantsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupsOwned?: GroupUpdateManyWithoutOwnerNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutParticipantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupsOwned?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroupUpsertWithoutParticipantsInput = {
    update: XOR<GroupUpdateWithoutParticipantsInput, GroupUncheckedUpdateWithoutParticipantsInput>
    create: XOR<GroupCreateWithoutParticipantsInput, GroupUncheckedCreateWithoutParticipantsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutParticipantsInput, GroupUncheckedUpdateWithoutParticipantsInput>
  }

  export type GroupUpdateWithoutParticipantsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: StringFieldUpdateOperationsInput | string
    minValue?: NullableFloatFieldUpdateOperationsInput | number | null
    maxValue?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutGroupsOwnedNestedInput
    restrictions?: RestrictionUpdateManyWithoutGroupNestedInput
    result?: DrawResultUpdateOneWithoutGroupNestedInput
    notifications?: NotificationUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutParticipantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: StringFieldUpdateOperationsInput | string
    minValue?: NullableFloatFieldUpdateOperationsInput | number | null
    maxValue?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    restrictions?: RestrictionUncheckedUpdateManyWithoutGroupNestedInput
    result?: DrawResultUncheckedUpdateOneWithoutGroupNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type WishlistUpsertWithoutParticipantInput = {
    update: XOR<WishlistUpdateWithoutParticipantInput, WishlistUncheckedUpdateWithoutParticipantInput>
    create: XOR<WishlistCreateWithoutParticipantInput, WishlistUncheckedCreateWithoutParticipantInput>
    where?: WishlistWhereInput
  }

  export type WishlistUpdateToOneWithWhereWithoutParticipantInput = {
    where?: WishlistWhereInput
    data: XOR<WishlistUpdateWithoutParticipantInput, WishlistUncheckedUpdateWithoutParticipantInput>
  }

  export type WishlistUpdateWithoutParticipantInput = {
    items?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistUncheckedUpdateWithoutParticipantInput = {
    id?: IntFieldUpdateOperationsInput | number
    items?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PairUpsertWithWhereUniqueWithoutGiverInput = {
    where: PairWhereUniqueInput
    update: XOR<PairUpdateWithoutGiverInput, PairUncheckedUpdateWithoutGiverInput>
    create: XOR<PairCreateWithoutGiverInput, PairUncheckedCreateWithoutGiverInput>
  }

  export type PairUpdateWithWhereUniqueWithoutGiverInput = {
    where: PairWhereUniqueInput
    data: XOR<PairUpdateWithoutGiverInput, PairUncheckedUpdateWithoutGiverInput>
  }

  export type PairUpdateManyWithWhereWithoutGiverInput = {
    where: PairScalarWhereInput
    data: XOR<PairUpdateManyMutationInput, PairUncheckedUpdateManyWithoutGiverInput>
  }

  export type PairScalarWhereInput = {
    AND?: PairScalarWhereInput | PairScalarWhereInput[]
    OR?: PairScalarWhereInput[]
    NOT?: PairScalarWhereInput | PairScalarWhereInput[]
    id?: IntFilter<"Pair"> | number
    drawId?: IntFilter<"Pair"> | number
    giverId?: IntFilter<"Pair"> | number
    takerId?: IntFilter<"Pair"> | number
  }

  export type PairUpsertWithWhereUniqueWithoutTakerInput = {
    where: PairWhereUniqueInput
    update: XOR<PairUpdateWithoutTakerInput, PairUncheckedUpdateWithoutTakerInput>
    create: XOR<PairCreateWithoutTakerInput, PairUncheckedCreateWithoutTakerInput>
  }

  export type PairUpdateWithWhereUniqueWithoutTakerInput = {
    where: PairWhereUniqueInput
    data: XOR<PairUpdateWithoutTakerInput, PairUncheckedUpdateWithoutTakerInput>
  }

  export type PairUpdateManyWithWhereWithoutTakerInput = {
    where: PairScalarWhereInput
    data: XOR<PairUpdateManyMutationInput, PairUncheckedUpdateManyWithoutTakerInput>
  }

  export type RestrictionUpsertWithWhereUniqueWithoutGiverInput = {
    where: RestrictionWhereUniqueInput
    update: XOR<RestrictionUpdateWithoutGiverInput, RestrictionUncheckedUpdateWithoutGiverInput>
    create: XOR<RestrictionCreateWithoutGiverInput, RestrictionUncheckedCreateWithoutGiverInput>
  }

  export type RestrictionUpdateWithWhereUniqueWithoutGiverInput = {
    where: RestrictionWhereUniqueInput
    data: XOR<RestrictionUpdateWithoutGiverInput, RestrictionUncheckedUpdateWithoutGiverInput>
  }

  export type RestrictionUpdateManyWithWhereWithoutGiverInput = {
    where: RestrictionScalarWhereInput
    data: XOR<RestrictionUpdateManyMutationInput, RestrictionUncheckedUpdateManyWithoutGiverInput>
  }

  export type RestrictionUpsertWithWhereUniqueWithoutTakerInput = {
    where: RestrictionWhereUniqueInput
    update: XOR<RestrictionUpdateWithoutTakerInput, RestrictionUncheckedUpdateWithoutTakerInput>
    create: XOR<RestrictionCreateWithoutTakerInput, RestrictionUncheckedCreateWithoutTakerInput>
  }

  export type RestrictionUpdateWithWhereUniqueWithoutTakerInput = {
    where: RestrictionWhereUniqueInput
    data: XOR<RestrictionUpdateWithoutTakerInput, RestrictionUncheckedUpdateWithoutTakerInput>
  }

  export type RestrictionUpdateManyWithWhereWithoutTakerInput = {
    where: RestrictionScalarWhereInput
    data: XOR<RestrictionUpdateManyMutationInput, RestrictionUncheckedUpdateManyWithoutTakerInput>
  }

  export type ParticipantCreateWithoutWishlistInput = {
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutParticipantsInput
    group: GroupCreateNestedOneWithoutParticipantsInput
    giverPairs?: PairCreateNestedManyWithoutGiverInput
    takerPairs?: PairCreateNestedManyWithoutTakerInput
    giverRestrictions?: RestrictionCreateNestedManyWithoutGiverInput
    takerRestrictions?: RestrictionCreateNestedManyWithoutTakerInput
  }

  export type ParticipantUncheckedCreateWithoutWishlistInput = {
    id?: number
    userId: number
    groupId: number
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
    giverPairs?: PairUncheckedCreateNestedManyWithoutGiverInput
    takerPairs?: PairUncheckedCreateNestedManyWithoutTakerInput
    giverRestrictions?: RestrictionUncheckedCreateNestedManyWithoutGiverInput
    takerRestrictions?: RestrictionUncheckedCreateNestedManyWithoutTakerInput
  }

  export type ParticipantCreateOrConnectWithoutWishlistInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutWishlistInput, ParticipantUncheckedCreateWithoutWishlistInput>
  }

  export type ParticipantUpsertWithoutWishlistInput = {
    update: XOR<ParticipantUpdateWithoutWishlistInput, ParticipantUncheckedUpdateWithoutWishlistInput>
    create: XOR<ParticipantCreateWithoutWishlistInput, ParticipantUncheckedCreateWithoutWishlistInput>
    where?: ParticipantWhereInput
  }

  export type ParticipantUpdateToOneWithWhereWithoutWishlistInput = {
    where?: ParticipantWhereInput
    data: XOR<ParticipantUpdateWithoutWishlistInput, ParticipantUncheckedUpdateWithoutWishlistInput>
  }

  export type ParticipantUpdateWithoutWishlistInput = {
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutParticipantsNestedInput
    group?: GroupUpdateOneRequiredWithoutParticipantsNestedInput
    giverPairs?: PairUpdateManyWithoutGiverNestedInput
    takerPairs?: PairUpdateManyWithoutTakerNestedInput
    giverRestrictions?: RestrictionUpdateManyWithoutGiverNestedInput
    takerRestrictions?: RestrictionUpdateManyWithoutTakerNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutWishlistInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    giverPairs?: PairUncheckedUpdateManyWithoutGiverNestedInput
    takerPairs?: PairUncheckedUpdateManyWithoutTakerNestedInput
    giverRestrictions?: RestrictionUncheckedUpdateManyWithoutGiverNestedInput
    takerRestrictions?: RestrictionUncheckedUpdateManyWithoutTakerNestedInput
  }

  export type GroupCreateWithoutRestrictionsInput = {
    name: string
    description?: string | null
    inviteCode: string
    minValue?: number | null
    maxValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutGroupsOwnedInput
    participants?: ParticipantCreateNestedManyWithoutGroupInput
    result?: DrawResultCreateNestedOneWithoutGroupInput
    notifications?: NotificationCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutRestrictionsInput = {
    id?: number
    name: string
    description?: string | null
    inviteCode: string
    minValue?: number | null
    maxValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
    participants?: ParticipantUncheckedCreateNestedManyWithoutGroupInput
    result?: DrawResultUncheckedCreateNestedOneWithoutGroupInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutRestrictionsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutRestrictionsInput, GroupUncheckedCreateWithoutRestrictionsInput>
  }

  export type ParticipantCreateWithoutGiverRestrictionsInput = {
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutParticipantsInput
    group: GroupCreateNestedOneWithoutParticipantsInput
    wishlist?: WishlistCreateNestedOneWithoutParticipantInput
    giverPairs?: PairCreateNestedManyWithoutGiverInput
    takerPairs?: PairCreateNestedManyWithoutTakerInput
    takerRestrictions?: RestrictionCreateNestedManyWithoutTakerInput
  }

  export type ParticipantUncheckedCreateWithoutGiverRestrictionsInput = {
    id?: number
    userId: number
    groupId: number
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
    wishlist?: WishlistUncheckedCreateNestedOneWithoutParticipantInput
    giverPairs?: PairUncheckedCreateNestedManyWithoutGiverInput
    takerPairs?: PairUncheckedCreateNestedManyWithoutTakerInput
    takerRestrictions?: RestrictionUncheckedCreateNestedManyWithoutTakerInput
  }

  export type ParticipantCreateOrConnectWithoutGiverRestrictionsInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutGiverRestrictionsInput, ParticipantUncheckedCreateWithoutGiverRestrictionsInput>
  }

  export type ParticipantCreateWithoutTakerRestrictionsInput = {
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutParticipantsInput
    group: GroupCreateNestedOneWithoutParticipantsInput
    wishlist?: WishlistCreateNestedOneWithoutParticipantInput
    giverPairs?: PairCreateNestedManyWithoutGiverInput
    takerPairs?: PairCreateNestedManyWithoutTakerInput
    giverRestrictions?: RestrictionCreateNestedManyWithoutGiverInput
  }

  export type ParticipantUncheckedCreateWithoutTakerRestrictionsInput = {
    id?: number
    userId: number
    groupId: number
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
    wishlist?: WishlistUncheckedCreateNestedOneWithoutParticipantInput
    giverPairs?: PairUncheckedCreateNestedManyWithoutGiverInput
    takerPairs?: PairUncheckedCreateNestedManyWithoutTakerInput
    giverRestrictions?: RestrictionUncheckedCreateNestedManyWithoutGiverInput
  }

  export type ParticipantCreateOrConnectWithoutTakerRestrictionsInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutTakerRestrictionsInput, ParticipantUncheckedCreateWithoutTakerRestrictionsInput>
  }

  export type GroupUpsertWithoutRestrictionsInput = {
    update: XOR<GroupUpdateWithoutRestrictionsInput, GroupUncheckedUpdateWithoutRestrictionsInput>
    create: XOR<GroupCreateWithoutRestrictionsInput, GroupUncheckedCreateWithoutRestrictionsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutRestrictionsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutRestrictionsInput, GroupUncheckedUpdateWithoutRestrictionsInput>
  }

  export type GroupUpdateWithoutRestrictionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: StringFieldUpdateOperationsInput | string
    minValue?: NullableFloatFieldUpdateOperationsInput | number | null
    maxValue?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutGroupsOwnedNestedInput
    participants?: ParticipantUpdateManyWithoutGroupNestedInput
    result?: DrawResultUpdateOneWithoutGroupNestedInput
    notifications?: NotificationUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutRestrictionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: StringFieldUpdateOperationsInput | string
    minValue?: NullableFloatFieldUpdateOperationsInput | number | null
    maxValue?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    participants?: ParticipantUncheckedUpdateManyWithoutGroupNestedInput
    result?: DrawResultUncheckedUpdateOneWithoutGroupNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type ParticipantUpsertWithoutGiverRestrictionsInput = {
    update: XOR<ParticipantUpdateWithoutGiverRestrictionsInput, ParticipantUncheckedUpdateWithoutGiverRestrictionsInput>
    create: XOR<ParticipantCreateWithoutGiverRestrictionsInput, ParticipantUncheckedCreateWithoutGiverRestrictionsInput>
    where?: ParticipantWhereInput
  }

  export type ParticipantUpdateToOneWithWhereWithoutGiverRestrictionsInput = {
    where?: ParticipantWhereInput
    data: XOR<ParticipantUpdateWithoutGiverRestrictionsInput, ParticipantUncheckedUpdateWithoutGiverRestrictionsInput>
  }

  export type ParticipantUpdateWithoutGiverRestrictionsInput = {
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutParticipantsNestedInput
    group?: GroupUpdateOneRequiredWithoutParticipantsNestedInput
    wishlist?: WishlistUpdateOneWithoutParticipantNestedInput
    giverPairs?: PairUpdateManyWithoutGiverNestedInput
    takerPairs?: PairUpdateManyWithoutTakerNestedInput
    takerRestrictions?: RestrictionUpdateManyWithoutTakerNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutGiverRestrictionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wishlist?: WishlistUncheckedUpdateOneWithoutParticipantNestedInput
    giverPairs?: PairUncheckedUpdateManyWithoutGiverNestedInput
    takerPairs?: PairUncheckedUpdateManyWithoutTakerNestedInput
    takerRestrictions?: RestrictionUncheckedUpdateManyWithoutTakerNestedInput
  }

  export type ParticipantUpsertWithoutTakerRestrictionsInput = {
    update: XOR<ParticipantUpdateWithoutTakerRestrictionsInput, ParticipantUncheckedUpdateWithoutTakerRestrictionsInput>
    create: XOR<ParticipantCreateWithoutTakerRestrictionsInput, ParticipantUncheckedCreateWithoutTakerRestrictionsInput>
    where?: ParticipantWhereInput
  }

  export type ParticipantUpdateToOneWithWhereWithoutTakerRestrictionsInput = {
    where?: ParticipantWhereInput
    data: XOR<ParticipantUpdateWithoutTakerRestrictionsInput, ParticipantUncheckedUpdateWithoutTakerRestrictionsInput>
  }

  export type ParticipantUpdateWithoutTakerRestrictionsInput = {
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutParticipantsNestedInput
    group?: GroupUpdateOneRequiredWithoutParticipantsNestedInput
    wishlist?: WishlistUpdateOneWithoutParticipantNestedInput
    giverPairs?: PairUpdateManyWithoutGiverNestedInput
    takerPairs?: PairUpdateManyWithoutTakerNestedInput
    giverRestrictions?: RestrictionUpdateManyWithoutGiverNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutTakerRestrictionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wishlist?: WishlistUncheckedUpdateOneWithoutParticipantNestedInput
    giverPairs?: PairUncheckedUpdateManyWithoutGiverNestedInput
    takerPairs?: PairUncheckedUpdateManyWithoutTakerNestedInput
    giverRestrictions?: RestrictionUncheckedUpdateManyWithoutGiverNestedInput
  }

  export type PairCreateWithoutDrawInput = {
    giver: ParticipantCreateNestedOneWithoutGiverPairsInput
    taker: ParticipantCreateNestedOneWithoutTakerPairsInput
  }

  export type PairUncheckedCreateWithoutDrawInput = {
    id?: number
    giverId: number
    takerId: number
  }

  export type PairCreateOrConnectWithoutDrawInput = {
    where: PairWhereUniqueInput
    create: XOR<PairCreateWithoutDrawInput, PairUncheckedCreateWithoutDrawInput>
  }

  export type PairCreateManyDrawInputEnvelope = {
    data: PairCreateManyDrawInput | PairCreateManyDrawInput[]
    skipDuplicates?: boolean
  }

  export type GroupCreateWithoutResultInput = {
    name: string
    description?: string | null
    inviteCode: string
    minValue?: number | null
    maxValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutGroupsOwnedInput
    participants?: ParticipantCreateNestedManyWithoutGroupInput
    restrictions?: RestrictionCreateNestedManyWithoutGroupInput
    notifications?: NotificationCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutResultInput = {
    id?: number
    name: string
    description?: string | null
    inviteCode: string
    minValue?: number | null
    maxValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
    participants?: ParticipantUncheckedCreateNestedManyWithoutGroupInput
    restrictions?: RestrictionUncheckedCreateNestedManyWithoutGroupInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutResultInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutResultInput, GroupUncheckedCreateWithoutResultInput>
  }

  export type PairUpsertWithWhereUniqueWithoutDrawInput = {
    where: PairWhereUniqueInput
    update: XOR<PairUpdateWithoutDrawInput, PairUncheckedUpdateWithoutDrawInput>
    create: XOR<PairCreateWithoutDrawInput, PairUncheckedCreateWithoutDrawInput>
  }

  export type PairUpdateWithWhereUniqueWithoutDrawInput = {
    where: PairWhereUniqueInput
    data: XOR<PairUpdateWithoutDrawInput, PairUncheckedUpdateWithoutDrawInput>
  }

  export type PairUpdateManyWithWhereWithoutDrawInput = {
    where: PairScalarWhereInput
    data: XOR<PairUpdateManyMutationInput, PairUncheckedUpdateManyWithoutDrawInput>
  }

  export type GroupUpsertWithoutResultInput = {
    update: XOR<GroupUpdateWithoutResultInput, GroupUncheckedUpdateWithoutResultInput>
    create: XOR<GroupCreateWithoutResultInput, GroupUncheckedCreateWithoutResultInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutResultInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutResultInput, GroupUncheckedUpdateWithoutResultInput>
  }

  export type GroupUpdateWithoutResultInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: StringFieldUpdateOperationsInput | string
    minValue?: NullableFloatFieldUpdateOperationsInput | number | null
    maxValue?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutGroupsOwnedNestedInput
    participants?: ParticipantUpdateManyWithoutGroupNestedInput
    restrictions?: RestrictionUpdateManyWithoutGroupNestedInput
    notifications?: NotificationUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutResultInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: StringFieldUpdateOperationsInput | string
    minValue?: NullableFloatFieldUpdateOperationsInput | number | null
    maxValue?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    participants?: ParticipantUncheckedUpdateManyWithoutGroupNestedInput
    restrictions?: RestrictionUncheckedUpdateManyWithoutGroupNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type DrawResultCreateWithoutPairsInput = {
    createdAt?: Date | string
    group: GroupCreateNestedOneWithoutResultInput
  }

  export type DrawResultUncheckedCreateWithoutPairsInput = {
    id?: number
    groupId: number
    createdAt?: Date | string
  }

  export type DrawResultCreateOrConnectWithoutPairsInput = {
    where: DrawResultWhereUniqueInput
    create: XOR<DrawResultCreateWithoutPairsInput, DrawResultUncheckedCreateWithoutPairsInput>
  }

  export type ParticipantCreateWithoutGiverPairsInput = {
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutParticipantsInput
    group: GroupCreateNestedOneWithoutParticipantsInput
    wishlist?: WishlistCreateNestedOneWithoutParticipantInput
    takerPairs?: PairCreateNestedManyWithoutTakerInput
    giverRestrictions?: RestrictionCreateNestedManyWithoutGiverInput
    takerRestrictions?: RestrictionCreateNestedManyWithoutTakerInput
  }

  export type ParticipantUncheckedCreateWithoutGiverPairsInput = {
    id?: number
    userId: number
    groupId: number
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
    wishlist?: WishlistUncheckedCreateNestedOneWithoutParticipantInput
    takerPairs?: PairUncheckedCreateNestedManyWithoutTakerInput
    giverRestrictions?: RestrictionUncheckedCreateNestedManyWithoutGiverInput
    takerRestrictions?: RestrictionUncheckedCreateNestedManyWithoutTakerInput
  }

  export type ParticipantCreateOrConnectWithoutGiverPairsInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutGiverPairsInput, ParticipantUncheckedCreateWithoutGiverPairsInput>
  }

  export type ParticipantCreateWithoutTakerPairsInput = {
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutParticipantsInput
    group: GroupCreateNestedOneWithoutParticipantsInput
    wishlist?: WishlistCreateNestedOneWithoutParticipantInput
    giverPairs?: PairCreateNestedManyWithoutGiverInput
    giverRestrictions?: RestrictionCreateNestedManyWithoutGiverInput
    takerRestrictions?: RestrictionCreateNestedManyWithoutTakerInput
  }

  export type ParticipantUncheckedCreateWithoutTakerPairsInput = {
    id?: number
    userId: number
    groupId: number
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
    wishlist?: WishlistUncheckedCreateNestedOneWithoutParticipantInput
    giverPairs?: PairUncheckedCreateNestedManyWithoutGiverInput
    giverRestrictions?: RestrictionUncheckedCreateNestedManyWithoutGiverInput
    takerRestrictions?: RestrictionUncheckedCreateNestedManyWithoutTakerInput
  }

  export type ParticipantCreateOrConnectWithoutTakerPairsInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutTakerPairsInput, ParticipantUncheckedCreateWithoutTakerPairsInput>
  }

  export type DrawResultUpsertWithoutPairsInput = {
    update: XOR<DrawResultUpdateWithoutPairsInput, DrawResultUncheckedUpdateWithoutPairsInput>
    create: XOR<DrawResultCreateWithoutPairsInput, DrawResultUncheckedCreateWithoutPairsInput>
    where?: DrawResultWhereInput
  }

  export type DrawResultUpdateToOneWithWhereWithoutPairsInput = {
    where?: DrawResultWhereInput
    data: XOR<DrawResultUpdateWithoutPairsInput, DrawResultUncheckedUpdateWithoutPairsInput>
  }

  export type DrawResultUpdateWithoutPairsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutResultNestedInput
  }

  export type DrawResultUncheckedUpdateWithoutPairsInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantUpsertWithoutGiverPairsInput = {
    update: XOR<ParticipantUpdateWithoutGiverPairsInput, ParticipantUncheckedUpdateWithoutGiverPairsInput>
    create: XOR<ParticipantCreateWithoutGiverPairsInput, ParticipantUncheckedCreateWithoutGiverPairsInput>
    where?: ParticipantWhereInput
  }

  export type ParticipantUpdateToOneWithWhereWithoutGiverPairsInput = {
    where?: ParticipantWhereInput
    data: XOR<ParticipantUpdateWithoutGiverPairsInput, ParticipantUncheckedUpdateWithoutGiverPairsInput>
  }

  export type ParticipantUpdateWithoutGiverPairsInput = {
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutParticipantsNestedInput
    group?: GroupUpdateOneRequiredWithoutParticipantsNestedInput
    wishlist?: WishlistUpdateOneWithoutParticipantNestedInput
    takerPairs?: PairUpdateManyWithoutTakerNestedInput
    giverRestrictions?: RestrictionUpdateManyWithoutGiverNestedInput
    takerRestrictions?: RestrictionUpdateManyWithoutTakerNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutGiverPairsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wishlist?: WishlistUncheckedUpdateOneWithoutParticipantNestedInput
    takerPairs?: PairUncheckedUpdateManyWithoutTakerNestedInput
    giverRestrictions?: RestrictionUncheckedUpdateManyWithoutGiverNestedInput
    takerRestrictions?: RestrictionUncheckedUpdateManyWithoutTakerNestedInput
  }

  export type ParticipantUpsertWithoutTakerPairsInput = {
    update: XOR<ParticipantUpdateWithoutTakerPairsInput, ParticipantUncheckedUpdateWithoutTakerPairsInput>
    create: XOR<ParticipantCreateWithoutTakerPairsInput, ParticipantUncheckedCreateWithoutTakerPairsInput>
    where?: ParticipantWhereInput
  }

  export type ParticipantUpdateToOneWithWhereWithoutTakerPairsInput = {
    where?: ParticipantWhereInput
    data: XOR<ParticipantUpdateWithoutTakerPairsInput, ParticipantUncheckedUpdateWithoutTakerPairsInput>
  }

  export type ParticipantUpdateWithoutTakerPairsInput = {
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutParticipantsNestedInput
    group?: GroupUpdateOneRequiredWithoutParticipantsNestedInput
    wishlist?: WishlistUpdateOneWithoutParticipantNestedInput
    giverPairs?: PairUpdateManyWithoutGiverNestedInput
    giverRestrictions?: RestrictionUpdateManyWithoutGiverNestedInput
    takerRestrictions?: RestrictionUpdateManyWithoutTakerNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutTakerPairsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wishlist?: WishlistUncheckedUpdateOneWithoutParticipantNestedInput
    giverPairs?: PairUncheckedUpdateManyWithoutGiverNestedInput
    giverRestrictions?: RestrictionUncheckedUpdateManyWithoutGiverNestedInput
    takerRestrictions?: RestrictionUncheckedUpdateManyWithoutTakerNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupsOwned?: GroupCreateNestedManyWithoutOwnerInput
    participants?: ParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: number
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupsOwned?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    participants?: ParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type GroupCreateWithoutNotificationsInput = {
    name: string
    description?: string | null
    inviteCode: string
    minValue?: number | null
    maxValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutGroupsOwnedInput
    participants?: ParticipantCreateNestedManyWithoutGroupInput
    restrictions?: RestrictionCreateNestedManyWithoutGroupInput
    result?: DrawResultCreateNestedOneWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutNotificationsInput = {
    id?: number
    name: string
    description?: string | null
    inviteCode: string
    minValue?: number | null
    maxValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: number
    participants?: ParticipantUncheckedCreateNestedManyWithoutGroupInput
    restrictions?: RestrictionUncheckedCreateNestedManyWithoutGroupInput
    result?: DrawResultUncheckedCreateNestedOneWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutNotificationsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutNotificationsInput, GroupUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupsOwned?: GroupUpdateManyWithoutOwnerNestedInput
    participants?: ParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupsOwned?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    participants?: ParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroupUpsertWithoutNotificationsInput = {
    update: XOR<GroupUpdateWithoutNotificationsInput, GroupUncheckedUpdateWithoutNotificationsInput>
    create: XOR<GroupCreateWithoutNotificationsInput, GroupUncheckedCreateWithoutNotificationsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutNotificationsInput, GroupUncheckedUpdateWithoutNotificationsInput>
  }

  export type GroupUpdateWithoutNotificationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: StringFieldUpdateOperationsInput | string
    minValue?: NullableFloatFieldUpdateOperationsInput | number | null
    maxValue?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutGroupsOwnedNestedInput
    participants?: ParticipantUpdateManyWithoutGroupNestedInput
    restrictions?: RestrictionUpdateManyWithoutGroupNestedInput
    result?: DrawResultUpdateOneWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: StringFieldUpdateOperationsInput | string
    minValue?: NullableFloatFieldUpdateOperationsInput | number | null
    maxValue?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    participants?: ParticipantUncheckedUpdateManyWithoutGroupNestedInput
    restrictions?: RestrictionUncheckedUpdateManyWithoutGroupNestedInput
    result?: DrawResultUncheckedUpdateOneWithoutGroupNestedInput
  }

  export type GroupCreateManyOwnerInput = {
    id?: number
    name: string
    description?: string | null
    inviteCode: string
    minValue?: number | null
    maxValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipantCreateManyUserInput = {
    id?: number
    groupId: number
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: number
    groupId?: number | null
    type: $Enums.NotificationType
    message: string
    createdAt?: Date | string
    delivered?: boolean
  }

  export type GroupUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: StringFieldUpdateOperationsInput | string
    minValue?: NullableFloatFieldUpdateOperationsInput | number | null
    maxValue?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ParticipantUpdateManyWithoutGroupNestedInput
    restrictions?: RestrictionUpdateManyWithoutGroupNestedInput
    result?: DrawResultUpdateOneWithoutGroupNestedInput
    notifications?: NotificationUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: StringFieldUpdateOperationsInput | string
    minValue?: NullableFloatFieldUpdateOperationsInput | number | null
    maxValue?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ParticipantUncheckedUpdateManyWithoutGroupNestedInput
    restrictions?: RestrictionUncheckedUpdateManyWithoutGroupNestedInput
    result?: DrawResultUncheckedUpdateOneWithoutGroupNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: StringFieldUpdateOperationsInput | string
    minValue?: NullableFloatFieldUpdateOperationsInput | number | null
    maxValue?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantUpdateWithoutUserInput = {
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutParticipantsNestedInput
    wishlist?: WishlistUpdateOneWithoutParticipantNestedInput
    giverPairs?: PairUpdateManyWithoutGiverNestedInput
    takerPairs?: PairUpdateManyWithoutTakerNestedInput
    giverRestrictions?: RestrictionUpdateManyWithoutGiverNestedInput
    takerRestrictions?: RestrictionUpdateManyWithoutTakerNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wishlist?: WishlistUncheckedUpdateOneWithoutParticipantNestedInput
    giverPairs?: PairUncheckedUpdateManyWithoutGiverNestedInput
    takerPairs?: PairUncheckedUpdateManyWithoutTakerNestedInput
    giverRestrictions?: RestrictionUncheckedUpdateManyWithoutGiverNestedInput
    takerRestrictions?: RestrictionUncheckedUpdateManyWithoutTakerNestedInput
  }

  export type ParticipantUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered?: BoolFieldUpdateOperationsInput | boolean
    group?: GroupUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ParticipantCreateManyGroupInput = {
    id?: number
    userId: number
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
  }

  export type RestrictionCreateManyGroupInput = {
    id?: number
    blockedGiverId: number
    blockedTakerId: number
  }

  export type NotificationCreateManyGroupInput = {
    id?: number
    userId: number
    type: $Enums.NotificationType
    message: string
    createdAt?: Date | string
    delivered?: boolean
  }

  export type ParticipantUpdateWithoutGroupInput = {
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutParticipantsNestedInput
    wishlist?: WishlistUpdateOneWithoutParticipantNestedInput
    giverPairs?: PairUpdateManyWithoutGiverNestedInput
    takerPairs?: PairUpdateManyWithoutTakerNestedInput
    giverRestrictions?: RestrictionUpdateManyWithoutGiverNestedInput
    takerRestrictions?: RestrictionUpdateManyWithoutTakerNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wishlist?: WishlistUncheckedUpdateOneWithoutParticipantNestedInput
    giverPairs?: PairUncheckedUpdateManyWithoutGiverNestedInput
    takerPairs?: PairUncheckedUpdateManyWithoutTakerNestedInput
    giverRestrictions?: RestrictionUncheckedUpdateManyWithoutGiverNestedInput
    takerRestrictions?: RestrictionUncheckedUpdateManyWithoutTakerNestedInput
  }

  export type ParticipantUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestrictionUpdateWithoutGroupInput = {
    giver?: ParticipantUpdateOneRequiredWithoutGiverRestrictionsNestedInput
    taker?: ParticipantUpdateOneRequiredWithoutTakerRestrictionsNestedInput
  }

  export type RestrictionUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    blockedGiverId?: IntFieldUpdateOperationsInput | number
    blockedTakerId?: IntFieldUpdateOperationsInput | number
  }

  export type RestrictionUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    blockedGiverId?: IntFieldUpdateOperationsInput | number
    blockedTakerId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationUpdateWithoutGroupInput = {
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivered?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PairCreateManyGiverInput = {
    id?: number
    drawId: number
    takerId: number
  }

  export type PairCreateManyTakerInput = {
    id?: number
    drawId: number
    giverId: number
  }

  export type RestrictionCreateManyGiverInput = {
    id?: number
    groupId: number
    blockedTakerId: number
  }

  export type RestrictionCreateManyTakerInput = {
    id?: number
    groupId: number
    blockedGiverId: number
  }

  export type PairUpdateWithoutGiverInput = {
    draw?: DrawResultUpdateOneRequiredWithoutPairsNestedInput
    taker?: ParticipantUpdateOneRequiredWithoutTakerPairsNestedInput
  }

  export type PairUncheckedUpdateWithoutGiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    drawId?: IntFieldUpdateOperationsInput | number
    takerId?: IntFieldUpdateOperationsInput | number
  }

  export type PairUncheckedUpdateManyWithoutGiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    drawId?: IntFieldUpdateOperationsInput | number
    takerId?: IntFieldUpdateOperationsInput | number
  }

  export type PairUpdateWithoutTakerInput = {
    draw?: DrawResultUpdateOneRequiredWithoutPairsNestedInput
    giver?: ParticipantUpdateOneRequiredWithoutGiverPairsNestedInput
  }

  export type PairUncheckedUpdateWithoutTakerInput = {
    id?: IntFieldUpdateOperationsInput | number
    drawId?: IntFieldUpdateOperationsInput | number
    giverId?: IntFieldUpdateOperationsInput | number
  }

  export type PairUncheckedUpdateManyWithoutTakerInput = {
    id?: IntFieldUpdateOperationsInput | number
    drawId?: IntFieldUpdateOperationsInput | number
    giverId?: IntFieldUpdateOperationsInput | number
  }

  export type RestrictionUpdateWithoutGiverInput = {
    group?: GroupUpdateOneRequiredWithoutRestrictionsNestedInput
    taker?: ParticipantUpdateOneRequiredWithoutTakerRestrictionsNestedInput
  }

  export type RestrictionUncheckedUpdateWithoutGiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    blockedTakerId?: IntFieldUpdateOperationsInput | number
  }

  export type RestrictionUncheckedUpdateManyWithoutGiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    blockedTakerId?: IntFieldUpdateOperationsInput | number
  }

  export type RestrictionUpdateWithoutTakerInput = {
    group?: GroupUpdateOneRequiredWithoutRestrictionsNestedInput
    giver?: ParticipantUpdateOneRequiredWithoutGiverRestrictionsNestedInput
  }

  export type RestrictionUncheckedUpdateWithoutTakerInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    blockedGiverId?: IntFieldUpdateOperationsInput | number
  }

  export type RestrictionUncheckedUpdateManyWithoutTakerInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    blockedGiverId?: IntFieldUpdateOperationsInput | number
  }

  export type PairCreateManyDrawInput = {
    id?: number
    giverId: number
    takerId: number
  }

  export type PairUpdateWithoutDrawInput = {
    giver?: ParticipantUpdateOneRequiredWithoutGiverPairsNestedInput
    taker?: ParticipantUpdateOneRequiredWithoutTakerPairsNestedInput
  }

  export type PairUncheckedUpdateWithoutDrawInput = {
    id?: IntFieldUpdateOperationsInput | number
    giverId?: IntFieldUpdateOperationsInput | number
    takerId?: IntFieldUpdateOperationsInput | number
  }

  export type PairUncheckedUpdateManyWithoutDrawInput = {
    id?: IntFieldUpdateOperationsInput | number
    giverId?: IntFieldUpdateOperationsInput | number
    takerId?: IntFieldUpdateOperationsInput | number
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