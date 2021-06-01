var genders = [
  "Agender",
  "Aromantic",
  "Asexual",
  "Bigender",
  "Bisexual",
  "Demisexual",
  "Gay People of South Africa",
  "Gay Pride",
  "LGBTQ+",
  "Genderfluid",
  "Genderqueer",
  "Intersex",
  "Lesbian",
  "Non-Binary",
  "Pansexuality",
  "Polysexuality",
  "Transgender",
];

var descriptions = [
  // Agender
  `
    Non-binary (also spelled nonbinary) or genderqueer is an umbrella term for gender identities that are neither male nor female‍—‌identities that are outside the gender binary. Non-binary identities fall under the transgender umbrella, since non-binary people typically identify with a gender that is different from their assigned sex, though some non-binary individuals do not consider themselves transgender. Another term for non-binary is enby (from the abbreviation 'NB').
    <br><br>
    Non-binary people may identify as having two or more genders (being bigender or trigender); having no gender (agender, nongendered, genderless, genderfree); moving between genders or having a fluctuating gender identity (genderfluid); being third gender or other-gendered (a category that includes those who do not place a name to their gender).
    <br><br>
    Gender identity is separate from sexual or romantic orientation, and non-binary people have a variety of sexual orientations, just as cisgender people do.
    `,

  // Aromantic
  `
    One of the attributes of aromantic people is that, despite feeling no romantic attraction, they may still enjoy sex. Aromantic people are not necessarily incapable of feeling love. For example, they may still feel familial love, or the type of platonic love that is expressed between friends. Individuals who identify as aromantic may have trouble distinguishing the affection of family and friends from that of a romantic partner.
    <br><br>
    Many aromantic people are asexual, but the term aromantic can be used in relation to various sexual identities, such as aromantic bisexual, aromantic heterosexual, aromantic lesbian, aromantic gay man or aromantic asexual. This is because aromanticism primarily deals with romantic attraction rather than with sexuality or libido.
    `,

  // Asexual
  `
    Asexuality is the lack of sexual attraction to others, or low or absent interest in or desire for sexual activity. It may be considered a sexual orientation or the lack thereof. It may also be categorized more widely to include a broad spectrum of asexual sub-identities.
    <br><br>
    Asexuality is distinct from abstention from sexual activity and from celibacy, which are behavioral and generally motivated by factors such as an individual's personal, social, or religious beliefs. Sexual orientation, unlike sexual behavior, is believed to be "enduring". Some asexual people engage in sexual activity despite lacking sexual attraction or a desire for sex, due to a variety of reasons, such as a desire to pleasure themselves or romantic partners, or a desire to have children.
    <br><br>
    Acceptance of asexuality as a sexual orientation and field of scientific research is still relatively new, as a growing body of research from both sociological and psychological perspectives has begun to develop. While some researchers assert that asexuality is a sexual orientation, other researchers disagree. Asexual individuals may represent about 1 percent of the population.
  `,

  // Bigender
  `
  Bigender, bi-gender, or dual gender is a gender identity that includes any two gender identities and behaviors. Identifying as bigender is typically understood to mean that one identifies as both male and female or moves between masculine gender expression and feminine gender expression, having two distinct gender identities simultaneously or fluctuating between them.
<br><br>
This is different from identifying as genderfluid, as those who identify as genderfluid may not go back and forth between any fixed gender identities and may experience an entire range or spectrum of identities over time. The American Psychological Association describes the bigender identity as part of the umbrella of transgender identities. Some bigender individuals express two distinct personas, which may be feminine, masculine, agender, androgyne, or other gender identities; others find that they identify as two genders simultaneously.
<br><br>
A 1999 survey conducted by the San Francisco Department of Public Health observed that, among the transgender community, 3% of those who were assigned male at birth and 8% of those who were assigned female at birth identified as either "a transvestite, cross-dresser, drag queen, or a bigendered person". A 2016 Harris poll conducted on behalf of GLAAD found that 1% of millennials identify as bigender.
  `,

  // Bisexual
  `
    Introduced on December 5, 1998, the bisexual pride flag was designed by Michael Page to represent and increase visibility of bisexuals in the LGBT community and society as a whole. Page chose a combination of Pantone Matching System (PMS) colors magenta (pink), lavender (purple), and royal (blue). The finished rectangular flag consists of a broad pink stripe at the top, a broad stripe in blue at the bottom, and a narrow purple stripe in the center.
    <br><br>
    Page described the meaning of the colors as, "The pink color represents sexual attraction to the same sex only (gay and lesbian), the blue represents sexual attraction to the opposite sex only (straight) and the resultant overlap color purple represents sexual attraction to both sexes (bi)."
    <br><br>
    He also described the flag's meaning in deeper terms, stating "The key to understanding the symbolism in the Bi Pride Flag is to know that the purple pixels of color blend unnoticeably into both the pink and blue, just as in the 'real world' where bi people blend unnoticeably into both the gay/lesbian and straight communities."
    `,

  // Demisexual
  `
  Demisexual people only feel sexually attracted to someone when they have an emotional bond with the person. They can be gay, straight, bisexual, or pansexual, and may have any gender identity. 
<br><br>
The prefix “demi” means half — which can refer to being halfway between sexual and asexual. Demisexuality can be a type of graysexuality. A graysexual person may experience sexual attraction only rarely, or they may feel sexual attraction but aren’t that interested in sex.
<br><br>
Demisexual people do not feel primary attraction — the attraction you feel to someone when you first meet them. They only feel secondary attraction — the type of attraction that happens after knowing someone for a while.
<br><br>
Other names for Demisexuality include–Hyposexual, Semisexual, etc.

  `,

  // Gays of Africa
  `
  The gay pride flag of South Africa is a gay pride symbol that aims to reflect the freedom and diversity of the South African nation and build pride in being an LGBTQ South African. It was registered as the flag of the GLBTI Association of South Africa in 2012 and is not an official national symbol of South Africa.
<br><br>
Designed by Eugene Brockman, the flag is a hybrid of the LGBT rainbow flag and the South African national flag launched in 1994 after the end of the apartheid era. Brockman said "I truly believe we (the LGBT community) put the dazzle into our rainbow nation and this flag is a symbol of just that". The stated purposes of the flag include celebrating legal same-sex marriage in South Africa and addressing issues such as discrimination, homophobia and the corrective rape hate crime.
  `,

  // Gay Pride
  `
  Gay pride or LGBT pride is the promotion of the self-affirmation, dignity, equality, and increased visibility of lesbian, gay, bisexual, and transgender (LGBT) people as a social group. Pride, as opposed to shame and social stigma, is the predominant outlook that bolsters most LGBT rights movements. Pride has lent its name to LGBT-themed organizations, institutes, foundations, book titles, periodicals, a cable TV station, and the Pride Library.
<br><br>
Ranging from solemn to carnivalesque, pride events are typically held during LGBT Pride Month or some other period that commemorates a turning point in a country's LGBT history, for example Moscow Pride in May for the anniversary of Russia's 1993 decriminalization of homosexuality. Some pride events include LGBT pride parades and marches, rallies, commemorations, community days, dance parties, and festivals.
  `,

  // lgbtq
  `
  The rainbow flag (also known as the gay pride flag or LGBT pride flag) is a symbol of lesbian, gay, bisexual, transgender, and queer (LGBTQ) pride and LGBTQ social movements. The colors reflect the diversity of the LGBTQ community, as the flag is often used as a symbol of gay pride during LGBTQ rights marches. While this use of the rainbow flag originated in San Francisco, it is now used worldwide. The symbol is one of several uses of rainbow flags.
  <br><br>
  Originally devised by artist Gilbert Baker, the design has undergone several revisions since its debut in 1978, first to remove colors then restore them based on availability of fabrics. The first flag had eight colors, however the traditional and still most common variant consists of six stripes: red, orange, yellow, green, blue, and violet. The flag is typically flown horizontally, with the red stripe on top, as it would be in a natural rainbow.
  <br><br>
  LGBTQ individuals and allies currently use rainbow flags and many rainbow-themed items and color schemes as an outward symbol of their identity or support. The rainbow flag is also commonly used as a general symbol of social equality and individuality. In addition to the rainbow, many other flags and symbols are used to communicate specific identities within the LGBTQ+ community.
  `,

  // Genderfluid
  `
  Genderfluid people often express a desire to remain flexible about their gender identity rather than committing to a single definition. They may fluctuate between differing gender expressions over their lifetime, or express multiple aspects of various gender markers at the same time. A genderfluid individual may also identify as bigender – shifting between masculine and feminine; or as trigender – shifting between these and a third gender. Pangender may be defined as being more than one gender, or it may describe a person who feels they are a member of all genders at the same time.
  `,

  // Genderqueer
  `
  Non-binary (also spelled nonbinary) or genderqueer is an umbrella term for gender identities that are neither male nor female‍—‌identities that are outside the gender binary. Non-binary identities fall under the transgender umbrella, since non-binary people typically identify with a gender that is different from their assigned sex, though some non-binary individuals do not consider themselves transgender. Another term for non-binary is enby (from the abbreviation 'NB').
<br><br>
Non-binary people may identify as having two or more genders (being bigender or trigender); having no gender (agender, nongendered, genderless, genderfree); moving between genders or having a fluctuating gender identity (genderfluid); being third gender or other-gendered (a category that includes those who do not place a name to their gender).
<br><br>
Gender identity is separate from sexual or romantic orientation, and non-binary people have a variety of sexual orientations, just as cisgender people do.
<br><br>
Non-binary gender identities are not associated with a specific gender expression, such as androgyny. Non-binary people as a group have a wide variety of gender expressions, and some may reject gender "identities" altogether. Some non-binary people are medically treated for gender dysphoria with surgery or hormones, as trans men and trans women often are.
  `,

  // Intersex
  `
  Intersex people are individuals born with any of several variations in sex characteristics including chromosomes, gonads, sex hormones or genitals that, according to the Office of the United Nations High Commissioner for Human Rights, "do not fit the typical definitions for male or female bodies". Though the range of atypical sex characteristics may be obvious from birth through the presence of physically ambiguous genitalia, in other instances, these atypical characteristics may go unnoticed, presenting as ambiguous internal reproductive organs or atypical chromosomes that may remain unknown to an individual all of their life.
<br><br>
Sex assignment at birth usually aligns with a child's anatomical sex and phenotype. The number of births where the baby is intersex has been reported to be as low as 0.018% or as high as roughly 1.7%, depending on which conditions are counted as intersex. The number of births with ambiguous genitals is in the range of 0.02% to 0.05%. Other intersex conditions involve atypical chromosomes, gonads, or hormones. Some intersex persons may be assigned and raised as a girl or boy but then identify with another gender later in life, while most continue to identify with their assigned sex.
  `,

  // Lesbian
  `
  A lesbian is a homosexual woman. The word lesbian is also used for women in relation to their sexual identity or sexual behavior, regardless of sexual orientation, or as an adjective to characterize or associate nouns with female homosexuality or same-sex attraction.
<br><br>
The concept of "lesbian" to differentiate women with a shared sexual orientation evolved in the 20th century. Throughout history, women have not had the same freedom or independence as men to pursue homosexual relationships, but neither have they met the same harsh punishment as homosexual men in some societies. Instead, lesbian relationships have often been regarded as harmless, unless a participant attempts to assert privileges traditionally enjoyed by men. As a result, little in history was documented to give an accurate description of how female homosexuality was expressed. When early sexologists in the late 19th century began to categorize and describe homosexual behavior, hampered by a lack of knowledge about homosexuality or women's sexuality, they distinguished lesbians as women who did not adhere to female gender roles. They classified them as mentally ill—a designation which has been reversed since the late 20th century in the global scientific community.
  `,

  //Non Binary
  `
  Non-binary (also spelled nonbinary) or genderqueer is an umbrella term for gender identities that are neither male nor female‍—‌identities that are outside the gender binary. Non-binary identities fall under the transgender umbrella, since non-binary people typically identify with a gender that is different from their assigned sex, though some non-binary individuals do not consider themselves transgender. Another term for non-binary is enby (from the abbreviation 'NB').
<br><br>
Non-binary people may identify as having two or more genders (being bigender or trigender); having no gender (agender, nongendered, genderless, genderfree); moving between genders or having a fluctuating gender identity (genderfluid); being third gender or other-gendered (a category that includes those who do not place a name to their gender).
<br><br>
Gender identity is separate from sexual or romantic orientation, and non-binary people have a variety of sexual orientations, just as cisgender people do.
<br><br>
Non-binary gender identities are not associated with a specific gender expression, such as androgyny. Non-binary people as a group have a wide variety of gender expressions, and some may reject gender "identities" altogether. Some non-binary people are medically treated for gender dysphoria with surgery or hormones, as trans men and trans women often are.
  `,

  // Pansexuality
  `
  The pansexual pride flag was introduced in October 2010 in a Tumblr blog ("Pansexual Pride Flag"). It has three horizontal bars that are pink, yellow and blue. "The pink represents being attracted to women, the blue being attracted to men, and the yellow for being attracted to everyone else."; such as non-binary gender, agender, bigender or genderfluid.
<br><br>
A "P" with the tail converted to an arrow with a cross is also sometimes used. It predates the flag and is still in use today. The cross on the "P"'s tail refers to the cross on the Venus or female symbol (♀), and the arrow refers to the arrow on the Mars or male symbol (♂). While it does not technically have a name, it is sometimes colloquially referred to as "the pansexual symbol”.
  `,

  // Polysexuality
  `
  Polysexuality has been defined as "encompassing or characterized by many different kinds of sexuality", and as sexual attraction to many, but not all, genders. Those who use the term may be doing so as a replacement for the term bisexual, believing bisexual reifies dichotomies. Major monotheistic religions generally prohibit polysexual activity, but some religions incorporate it into their practices. Polysexuality is also considered to be another word for bisexuality.
  `,

  // Transgender
  `
  Transgender people have a gender identity or gender expression that differs from the sex that they were assigned at birth. Some transgender people who desire medical assistance to transition from one sex to another identify as transsexual. Transgender, often shortened as trans, is also an umbrella term; in addition to including people whose gender identity is the opposite of their assigned sex (trans men and trans women), it may also include people who are non-binary or genderqueer. Other definitions of transgender also include people who belong to a third gender, or else conceptualize transgender people as a third gender. The term transgender may be defined very broadly to include cross-dressers.
<br><br>
Being transgender is distinct from sexual orientation. Transgender people may identify as heterosexual (straight), homosexual (gay), bisexual, asexual, or otherwise, or may decline to label their sexual orientation. The term transgender is also distinguished from intersex, a term that describes people born with physical sex characteristics "that do not fit typical binary notions of male or female bodies". The opposite of transgender is cisgender, which describes persons whose gender identity matches their assigned sex.
  `,
];

function wrapImage(gender) {
  return '<img src="assets/img/' + gender + '.png" style="width: 100%; border-radius: 8px" />';
}

var index = Math.floor(Math.random() * genders.length);
document.getElementById("gender-name").innerHTML = genders[index];
document.getElementById("gender-flag").innerHTML = wrapImage(genders[index]);
document.getElementById("gender-desc").innerHTML = descriptions[index];

function newGender() {
  var index = Math.floor(Math.random() * genders.length);
  document.getElementById("gender-name").innerHTML = genders[index];
  document.getElementById("gender-desc").innerHTML = descriptions[index];
  document.getElementById("gender-flag").innerHTML = wrapImage(genders[index]);
}
