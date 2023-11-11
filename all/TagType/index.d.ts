declare const TagTypeSymbol:unique symbol
export type TagType<P, S> = P&{ [TagTypeSymbol]:S }
