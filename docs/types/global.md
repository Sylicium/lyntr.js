---
description: Some global types you could find in the module.
---

# global

### HTTPMethod

```typescript
export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD' | 'CONNECT' | 'TRACE';
```

This type is essentially a list for all HTTP method names there is.

### numberAsString

```typescript
export type numberAsString = `${number}`; 
```

This type is crutial because it refers to a number, that is actually in a string, meaning that you have to first parse it before making any calculations. However, this type is mostly common for the identifiers of objects such as User IDs, Lynt IDs, etc. so you don't actually have to parse them.

### dateAsString

```typescript
export type dateAsString = `${number}-${number}-${number}T${number}:${number}:${number}.${number}Z`;
```

The same as [numberAsString](global.md#numberasstring), this time refers to any date like `2024-08-13T12:34:56.789Z`. This is also used before parsing in the module to better understand the time of string you are currently manipulating.
