# Fixture Generations

Fixtures are generated from definitions specified in `generate/definitions/`. They are grouped by API resource when applicable

## Generating Fixtures

```bash
npm run generate
```

Generating fixtures relies on having the relevant API keys loaded as environment variables. Typically with the .env file in the root directory

## Adding New Fixtures

Test coverage should not change for the above steps, otherwise a mistake has been made (e.g. a fixture is not being picked up in the generation process, a fixture is not being exported as expected)

### Create a Fixture Definition

1. Create a new definition in the relevant resource file in `generate/definition/`
2. If the resource is new:
  a. Add it to the list of defined resources in `generate/definitions/index.ts`
  b. Check it is exported in `tests/definitions.unit.ts`

### Export the Fixture

1. Export the fixture via the relevant fixture file in `lib/fixtures`
2. Test the fixture is exported in `tests/fixutres.unit.ts`

### Regenerate Fixtures

Regenerate fixtures with `npm run generate`

