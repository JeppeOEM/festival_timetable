import InfoArticle from "../../components/Info/InfoArticle";
import info from "../../styles/pages/Info.module.sass";

function Info() {
  return (
    <>
      <section className={info.section}>
        <hr />
        <InfoArticle title='About the festival'>
          <p>
            This text is written by chatGBT: A heavy metal festival is a music festival that focuses on heavy metal
            music. These festivals typically feature a lineup of various heavy metal bands, as well as food and
            merchandise vendors. Some festivals also offer camping facilities for attendees. Heavy metal festivals can
            range in size, from smaller, local events with a few hundred attendees, to larger, international festivals
            with tens of thousands of attendees. Many heavy metal festivals take place outdoors, although some may be
            held in indoor venues. At a heavy metal festival, attendees can expect to hear a variety of heavy metal
            subgenres, including thrash metal, death metal, and black metal. The atmosphere at these festivals is
            typically energetic and lively, with fans headbanging and moshing along to the music. In addition to the
            music, many heavy metal festivals also feature other forms of entertainment, such as fireworks displays,
            pyrotechnics, and other special effects. These festivals can be a great way for heavy metal fans to discover
            new bands and connect with others who share their love of the genre.
          </p>
        </InfoArticle>
        <hr />

        <InfoArticle title='Rules'>
          <p>
            This text is written by chatGBT AI: A heavy metal festival is a music festival that focuses on heavy metal
            music. These festivals typically feature a lineup of various heavy metal bands, as well as food and
            merchandise vendors. Some festivals also offer camping facilities for attendees. Heavy metal festivals can
            range in size, from smaller, local events with a few hundred attendees, to larger, international festivals
            with tens of thousands of attendees. Many heavy metal festivals take place outdoors, although some may be
            held in indoor venues. At a heavy metal festival, attendees can expect to hear a variety of heavy metal
            subgenres, including thrash metal, death metal, and black metal. The atmosphere at these festivals is
            typically energetic and lively, with fans headbanging and moshing along to the music. In addition to the
            music, many heavy metal festivals also feature other forms of entertainment, such as fireworks displays,
            pyrotechnics, and other special effects. These festivals can be a great way for heavy metal fans to discover
            new bands and connect with others who share their love of the genre.
          </p>
        </InfoArticle>
        <hr />
        <InfoArticle title='Festival Showers'>
          <p>
            At a festival, the shower location is typically an area where attendees can wash and freshen up. These
            showers are usually located in a central location, such as near the camping area or in a dedicated shower
            facility. Festival showers are usually communal, with multiple shower stalls or stalls with open showers
            that are separated by partitions or curtains. Some festivals may offer private showers for an additional
            fee. The water is usually provided by a tank or other temporary water source, and the showers are often
            powered by generators or solar panels. Festival shower locations are usually equipped with soap and shampoo,
            although attendees may want to bring their own personal hygiene products. It's a good idea to bring a towel
            and flip flops or shower shoes to use in the shower area. Overall, the festival shower location is a
            convenient and necessary facility for attendees to stay clean and refreshed during the event. It's important
            to remember to be considerate of others when using the showers, and to follow any posted rules or
            guidelines.
          </p>
        </InfoArticle>
        <hr />
      </section>
    </>
  );
}

export default Info;

/* import { useState } from "react";

import Image from "next/image";
import info from "../../styles/pages/info.module.sass";

function Info() {
  const [expand, setExpand] = useState(false);
  const [expand2, setExpand2] = useState(false);
  const [expand3, setExpand3] = useState(false);
  const [expand4, setExpand4] = useState(false);

  function expandArticle(setExpandFunc, bool) {
    console.log("bool", bool);
    if (expand === false) {
      setExpandFunc(true);
    } else {
      setExpandFunc(false);
    }
  }

  function expandArticle2(setExpandFunc, bool) {
    console.log("bool", bool);
    if (expand === false) {
      setExpandFunc(true);
    } else {
      setExpandFunc(false);
    }
  }

  function expandArticle3(setExpandFunc, bool) {
    console.log("bool", bool);
    if (expand === false) {
      setExpandFunc(true);
    } else {
      setExpandFunc(false);
    }
  }

  function expandArticle4(setExpandFunc, bool) {
    console.log("bool", bool);
    if (expand === false) {
      setExpandFunc(true);
    } else {
      setExpandFunc(false);
    }
  }

  return (
    <section>
      <article className={info.article}>
        <h1>About the festival</h1>
        <p>s</p>
        <p>
          {expand == true ? (
            <>
              <p>
                {" "}
                A heavy metal festival is a music festival that focuses on heavy metal music. These festivals typically
                feature a lineup of various heavy metal bands, as well as food and merchandise vendors. Some festivals
                also offer camping facilities for attendees. Heavy metal festivals can range in size, from smaller,
                local events with a few hundred attendees, to larger, international festivals with tens of thousands of
                attendees. Many heavy metal festivals take place outdoors, although some may be held in indoor venues.
                At a heavy metal festival, attendees can expect to hear a variety of heavy metal subgenres, including
                thrash metal, death metal, and black metal. The atmosphere at these festivals is typically energetic and
                lively, with fans headbanging and moshing along to the music. In addition to the music, many heavy metal
                festivals also feature other forms of entertainment, such as fireworks displays, pyrotechnics, and other
                special effects. These festivals can be a great way for heavy metal fans to discover new bands and
                connect with others who share their love of the genre.
              </p>
            </>
          ) : null}
        </p>
        <p
          onClick={() => {
            expandArticle(setExpand, expand);
          }}>
          Read more
        </p>
      </article>

      <article className={info.article}>
        <h1>About the festival</h1>
        <p>s</p>
        <p>
          {expand2 == true ? (
            <>
              <p>
                {" "}
                No weapons or illegal substances: Attendees are not allowed to bring weapons or illegal substances to
                the festival. This is for the safety of all attendees and to ensure that the festival complies with
                local laws. Respect others: Attendees are expected to respect the rights and personal space of others.
                This includes not engaging in physical violence or verbal abuse. No unauthorized recording or
                photography: Many festivals prohibit attendees from recording or photographing the performances without
                permission. This is to protect the artists' intellectual property and to ensure that attendees are able
                to enjoy the music without distractions. Follow the event staff's instructions: Event staff, such as
                security guards and medical personnel, are there to ensure the safety and enjoyment of all attendees.
                Attendees should follow their instructions and cooperate with them if they ask for assistance. Respect
                the venue: Attendees should respect the venue and its facilities, including not causing damage or
                leaving litter behind. By following these rules and showing respect for others, attendees can help
                ensure that the festival is a safe and enjoyable experience for all.
              </p>
            </>
          ) : null}
        </p>
        <p
          onClick={() => {
            expandArticle2(setExpand2, expand2);
          }}>
          Read more
        </p>
      </article>

      <article className={info.article}>
        <h1>Festival Showers</h1>

        <p>
          {expand3 == true ? (
            <>
              news{" "}
              <p>
                At a festival, the shower location is typically an area where attendees can wash and freshen up. These
                showers are usually located in a central location, such as near the camping area or in a dedicated
                shower facility. Festival showers are usually communal, with multiple shower stalls or stalls with open
                showers that are separated by partitions or curtains. Some festivals may offer private showers for an
                additional fee. The water is usually provided by a tank or other temporary water source, and the showers
                are often powered by generators or solar panels. Festival shower locations are usually equipped with
                soap and shampoo, although attendees may want to bring their own personal hygiene products. It's a good
                idea to bring a towel and flip flops or shower shoes to use in the shower area. Overall, the festival
                shower location is a convenient and necessary facility for attendees to stay clean and refreshed during
                the event. It's important to remember to be considerate of others when using the showers, and to follow
                any posted rules or guidelines.
              </p>
            </>
          ) : null}
        </p>
        <p
          onClick={() => {
            expandArticle3(setExpand3, expand3);
          }}>
          Read more
        </p>
      </article>

      <article className={info.article}>
        <h1>Festival Showers</h1>

        <p>
          {expand4 == true ? (
            <>
              news{" "}
              <p>
                Many heavy metal festivals offer camping facilities for attendees who want to stay onsite for the
                duration of the event. The camping area is usually located in a designated area near the festival
                grounds, and may include a variety of amenities such as bathrooms, showers, and food vendors. At a heavy
                metal festival, the camping area is often a place where attendees can socialize and connect with other
                fans. Many people enjoy setting up camp with friends and meeting new people while they are there. It's
                important to follow any rules and guidelines set by the festival when staying in the camping area. This
                may include respecting the personal space and property of others, not playing music or making noise
                after a certain time, and not bringing illegal substances or weapons into the area. Attendees should
                also be prepared for the weather and bring any necessary camping gear, such as tents, sleeping bags, and
                warm clothing. It's a good idea to pack a flashlight or headlamp, as well as any other essentials, such
                as sunscreen, insect repellent, and water bottles. Overall, the camping area at a heavy metal festival
                can be a fun and enjoyable part of the experience, as long as attendees follow the rules and show
                respect for others.
              </p>
            </>
          ) : null}
        </p>
        <p
          onClick={() => {
            expandArticle(setExpand4);
          }}>
          Read more
        </p>
      </article>
    </section>
  );
}

export default Info;
 */
