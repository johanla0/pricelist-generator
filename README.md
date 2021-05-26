## Pricelist Generator
[![Maintainability](https://api.codeclimate.com/v1/badges/9524380c0450d7f347e4/maintainability)](https://codeclimate.com/github/johanla0/pricelist-generator/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/9524380c0450d7f347e4/test_coverage)](https://codeclimate.com/github/johanla0/pricelist-generator/test_coverage)

Use it to generate pricelist for the laboratory based on the format required by different services.

### What to do

1. Clone the repo
   ```
   $ git clone https://github.com/johanla0/pricelist-generator.git
   ```
2. Install with
   ```
   $ make install
   ```

### Test it

```
$ make test
```

### Usage
```
Usage: genpricelist [options] <filepath1> <filepath2>

Generates pricelist according to services import specification

Options:
  -V, --version        output the version number
  -d, --debug          output extra debugging
  -f, --format <type>  export format: yandex / modulkassa (default: "modulkassa")
  -h, --help           render usage information
  ```
