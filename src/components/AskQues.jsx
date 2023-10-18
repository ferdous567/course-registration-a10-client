
const AskQues = () => {
    return (
        <div className="mt-20">
            <div className="text-center text-3xl font-bold">
                Frequently Ask and Questions
            </div>
            <div className="w-3/4 mx-auto my-10">
            
            <div className="collapse collapse-plus bg-base-200 mb-5">
                <input type="radio" name="my-accordion-3"  />
                <div className="collapse-title text-xl font-medium">
                Are beverages good for health?
                </div>
                <div className="collapse-content">
                    <p>Some beverages should be limited or consumed in moderation, including fruit juice, milk, and those made with low-calorie sweeteners, like diet drinks. Alcohol in moderation can be healthy for some people, but not everyone. Its generally best to avoid sugary drinks like soda, sports beverages, and energy drinks.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mb-5">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                Why do we need food and beverage?
                </div>
                <div className="collapse-content">
                    <p>A food is something that provides nutrients. Nutrients are substances that provide: energy for activity, growth, and all functions of the body such as breathing, digesting food, and keeping warm; materials for the growth and repair of the body, and for keeping the immune system healthy.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                What is the most important thing in food and beverage industry?
                </div>
                <div className="collapse-content">
                    <p>The number one aspect of any F&B business has to be the food that it is serving to its customers. That is the essence of the business – FOOD.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AskQues;