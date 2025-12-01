'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from '@/hooks/useTranslation';

export default function CodeOfConductPage() {
    const { t } = useTranslation();

    const unacceptableBehaviorList = t('codeOfConduct.unacceptableBehaviorList', { returnObjects: true });
    const listItems = Array.isArray(unacceptableBehaviorList) ? unacceptableBehaviorList : [];

    return (
        <div className="bg-background py-16 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <Card className="max-w-4xl mx-auto">
                    <CardHeader>
                        <CardTitle className="text-3xl font-headline font-bold text-center tracking-tight sm:text-4xl">{t('codeOfConduct.title')}</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-lg max-w-none text-muted-foreground">
                        <section className="py-2">
                            <h2 className="text-2xl font-headline font-bold text-foreground">{t('codeOfConduct.missionTitle')}</h2>
                            <p>
                                {t('codeOfConduct.missionText')}
                            </p>
                        </section>
                        <section className="py-2">
                            <h2 className="text-2xl font-headline font-bold text-foreground">{t('codeOfConduct.expectedBehaviorTitle')}</h2>
                            <p>{t('codeOfConduct.expectedBehaviorText')}</p>
                            <ul>
                                <li><strong>{t('codeOfConduct.expectedBehaviorList.respect').split(':')[0]}:</strong> {t('codeOfConduct.expectedBehaviorList.respect').split(':')[1]}</li>
                                <li><strong>{t('codeOfConduct.expectedBehaviorList.inclusive').split(':')[0]}:</strong> {t('codeOfConduct.expectedBehaviorList.inclusive').split(':')[1]}</li>
                                <li><strong>{t('codeOfConduct.expectedBehaviorList.professional').split(':')[0]}:</strong> {t('codeOfConduct.expectedBehaviorList.professional').split(':')[1]}</li>
                                <li><strong>{t('codeOfConduct.expectedBehaviorList.collaborate').split(':')[0]}:</strong> {t('codeOfConduct.expectedBehaviorList.collaborate').split(':')[1]}</li>
                            </ul>
                        </section>
                        <section className="py-2">
                            <h2 className="text-2xl font-headline font-bold text-foreground">{t('codeOfConduct.unacceptableBehaviorTitle')}</h2>
                            <p>{t('codeOfConduct.unacceptableBehaviorText')}</p>
                            <ul>
                                {listItems.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <p>{t('codeOfConduct.unacceptableBehaviorFooter')}</p>
                        </section>
                        <section className="py-2">
                            <h2 className="text-2xl font-headline font-bold text-foreground">{t('codeOfConduct.reportingTitle')}</h2>
                            <p>
                                {t('codeOfConduct.reportingText1')}
                            </p>
                            <p>{t('codeOfConduct.reportingText2')}</p>
                            <ul>
                                <li><strong>{t('codeOfConduct.reportingList.inPerson').split(':')[0]}:</strong> {t('codeOfConduct.reportingList.inPerson').split(':')[1]}</li>
                                <li><strong>{t('codeOfConduct.reportingList.email').split(':')[0]}:</strong> {t('codeOfConduct.reportingList.email').split(':')[1]}</li>
                            </ul>
                            <p>{t('codeOfConduct.reportingText3')}</p>
                        </section>
                        <section className="py-2">
                            <h2 className="text-2xl font-headline font-bold text-foreground">{t('codeOfConduct.consequencesTitle')}</h2>
                            <p>{t('codeOfConduct.consequencesText1')}</p>
                            <p>
                                {t('codeOfConduct.consequencesText2')}
                            </p>
                            <p>
                                {t('codeOfConduct.consequencesText3')}
                            </p>
                        </section>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
