# seq

A sequence/stream library for easily parsing and analyzing data

[![node ci](https://github.com/Ajetski/seq/actions/workflows/node-ci.yml/badge.svg)](https://github.com/Ajetski/seq/actions/workflows/node-ci.yml)


## Importing
```ts
import { Sequence, Range, Filter, Map, Sequenceable /*, ...*/ } from '@ajetski/seq';
```

## Creating Sequenceables

### Creating a Sequence from an Iterable
```ts
let seq = new Sequence([1, 2, 3]);
```

### Creating a Range
```ts
let seq = new Range(1, 4); // Sequence(1, 2, 3)
let seq2 = new Range(1, 10, 2); // Sequence(1, 3, 5, 7, 9)
let seq3 = new Range(10, 1, -2); // Sequence(10, 8, 6, 4, 2)
```

## Operations on Sequenceables

### Filtering a Sequence
```ts
let seq = new Sequence([1, 2, 3])
  .filter((elem, idx) => idx % 2 === 0); // Sequence(1, 3)
```

### Fold/Reduce a Sequence
```ts
let seq = new Sequence([1, 2, 3])
  .fold(0, (acc, elem) => acc + elem); // 6
```

### Map a Sequence
```ts
let seq = new Sequence([1, 2, 3])
  .map((elem, idx) => elem * 2); // Sequence(2, 4, 6)
```
