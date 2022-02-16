import React from 'react'
import Card from './Card'
function Content() {
    return (
        <section className="text-gray-400 bg-gray-900 body-font overflow-hidden ">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-12">
                    <Card category='React'
                        heading='How to Use React Hooks'
                        description='Confused on which course to take? I have got you covered. Browse courses and find out the best course for you. Its free! Code With Harry is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn.'
                        views='1.7k'
                        comment='Best Tutorial till now'
                        author_name='Dev Gohari'
                        author_designation='Full-Stack Developer' />
                    <Card category='React'
                        heading='How to Use React Hooks'
                        description='Confused on which course to take? I have got you covered. Browse courses and find out the best course for you. Its free! Code With Harry is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn.'
                        views='1.7k'
                        comment='Best Tutorial till now'
                        author_name='Dev Gohari'
                        author_designation='Full-Stack Developer' />
                </div>
            </div>
        </section>
    )
}

export default Content
