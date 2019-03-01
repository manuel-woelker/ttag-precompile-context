import {c, t} from 'ttag';

// works
console.log(t`simple`);

// doesn't work, only outputs "two;"
console.log(c('foo').t`with_context`);

// works - wrapped with a bogus function
console.log(make_it_work(c('foo').t`with_context`));