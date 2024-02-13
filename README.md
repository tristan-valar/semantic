# THis is testing repo for semantic release & auto generation of release logs

## Installation steps

#### 1 install

```bash
npm install -D semantic-release @semantic-release/git @semantic-release/github
```

#### 2 Create config file

release.config.js

#### 3 create github action

## Notes

- Works well. Only con is that I don't see a way to get more control over what version we are releasing
- If we squash the commits they don't appear, I wonder if it finds breaking changes anyway? Should check this
- also doesnt add tags? Not sure why we should care
