(()=>{

    type HtmlType = "input" | "select" | "textarea" | "radio";
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string,
        ) {}
    }

    class InputEvents {
        
        constructor() {}
        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    class InputElement {
        
        public html: HtmlElement;
        public attributes: InputAttributes;
        public events: InputEvents;

        constructor(type: HtmlType, value: string, placeholder: string, id: string ) {
            this.html = new HtmlElement(id, type);
            this.attributes = new InputAttributes(value, placeholder);
            this.events = new InputEvents();
        }
    }

    const userNameInput = new InputElement("input", "dgof", "Enter your username", "inputUsername");

    console.log({ userNameInput });

})()