install:
	npm install
start:
	npx babel-node src/bin/brain-*.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
test:
	npm test
build:
	npm publish --dry-run
	sudo npm link