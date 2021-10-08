import { Component, Method, h } from '@stencil/core';

@Component({
    tag: 'my-component',
    shadow: true,
})
export class MyComponent {
    
    /**
     * Hello
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
        return <div>Hello, World!</div>;
    }
}
