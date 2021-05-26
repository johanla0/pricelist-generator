BRANCH := $(shell git rev-parse --abbrev-ref HEAD)
branch:
	git checkout $(ARGS) > /dev/null 2>&1 || git checkout -b $(ARGS)
history:
	git log
install:
	npm ci
genpricelist:
	node bin/genpricelist.js
publish:
	npm publish --dry-run
pull:
	git pull origin $(BRANCH)
push:
	git push origin $(BRANCH)
lint:
	npx eslint .
test:
	npm test
test-coverage:
	npm test -- --coverage --coverageProvider=v8
uncommit:
	git reset --soft HEAD^
upd:
	git merge master --no-edit
