import { Component, Method, h } from '@stencil/core';

@Component({
    tag: 'my-component',
    shadow: true,
})
export class MyComponent {
    
    /**
     * Goodbye
     */
    @Method()
    async goodbye() {
        console.log('goodbye');
    }
    
    /**
     * Hello
     */
    @Method()
    hello() {
        console.log('hello');
    }
    
    
    render() {
        return <div>Hello! Goodbye!</div>;
    }
}
