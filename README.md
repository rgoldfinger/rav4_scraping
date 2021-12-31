A collection of utils for working with the Toyota API in search of a Rav4 Prime.

The scraping part is left as an exercise to the reader, but here is the basic algorithm:

1. Iterate through each number in the range of current vins + some buffer for new ones.
2. For each number, build all possible prime vins using `allVins` in `uitl/vins`.
3. Fetch each vin using `fetchVin` in `uitl/vins`. If it does not 404, it exists and is allocated.
4. To tell if it's a new vin, write out the description from `util/description` for each vin seen to a file as you go. Read the same file on subsequent runs, and you can check if it's new by virture of the vin not being present in the file (just a simple `fileContents.includes(vin)`)

Prior art and reference:

- https://docs.google.com/spreadsheets/d/1-_tNaeb4kP87UZSR4JdKxzCjF_OxIfBvTWFGc4-OwqA/edit#gid=1148882028
- https://docs.google.com/spreadsheets/d/1tgQXcM27dEnbUzm-oe1BNzmjlV2lSguLBdf5Zr4MYUw/edit#gid=888114205
- https://www.reddit.com/r/rav4prime/comments/j4k0v9/rav4_prime_spreadsheet/ggxu3zc/?utm_source=reddit&utm_medium=web2x&context=3
- https://www.reddit.com/r/rav4prime/comments/j1ia2t/rav4_prime_xse_premium_75008000/g709wtd/

## Setup

```
yarn install
```

## Running scripts

```
yarn ts-node --transpile-only <script name>
```
