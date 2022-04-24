
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateBillInput {
    exampleField?: Nullable<number>;
}

export class UpdateBillInput {
    id: number;
}

export class Bill {
    exampleField?: Nullable<number>;
}

export abstract class IQuery {
    abstract bills(): Nullable<Bill>[] | Promise<Nullable<Bill>[]>;
    abstract bill(id: number): Nullable<Bill> | Promise<Nullable<Bill>>;
}

export abstract class IMutation {
    abstract createBill(createBillInput: CreateBillInput): Bill | Promise<Bill>;
    abstract updateBill(updateBillInput: UpdateBillInput): Bill | Promise<Bill>;
    abstract removeBill(id: number): Nullable<Bill> | Promise<Nullable<Bill>>;
}

type Nullable<T> = T | null;
