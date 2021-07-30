# Trace Web Apps


## Trace Kit

Trace Kit is a shared library used by other Trace Apps.  This library should include reusable components and libraries.

### Testing

For testing components we will use (Storybook)[https://www.learnstorybook.com/intro-to-storybook/react/en/get-started/].

```
yarn storybook
```

For testing other libraries mocha will be used.
```
yarn test
```

### Building

Trace Kit will only be used internaly by other trace web apps.
Apps should include this library with this command.
After making changes to the trace-kit project you will need to build and re-add trace-kit.
```
yarn add ../trace-kit
```

To do the building:
```
yarn build
```


## User Profiles

The user-profiles project will provide a web app to view and manage a trace athletes profile page.

```
yarn install // install dependencies
yarn add ../trace-kit // add the trace-kit project
yarn storybook // run component tests
yarn test // run unit tests
```
