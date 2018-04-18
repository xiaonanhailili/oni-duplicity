
- Figure out what is creating duplicate keys in AppNavMenu.

- Lots of normalization going on in selectors.  Should normalize before storing in state.  Will require de-normalizing in a way that on-save-parser can understand (turning flat objects back into ES6 Map, for example).