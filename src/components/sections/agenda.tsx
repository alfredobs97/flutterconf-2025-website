"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Coffee, PartyPopper, Presentation, Link as LinkIcon } from "lucide-react";
import { agendaData, Session } from "@/lib/agenda-data";
import { cn } from "@/lib/utils";

const Agenda = () => {
  const { t } = useTranslation('common');
  const morningSessions = agendaData.filter((s) => s.track === "morning");
  const afternoonSessions = agendaData.filter((s) => s.track === "afternoon");

  return (
    <section id="agenda" className="container mx-auto px-4 py-20 scroll-mt-20">
      <div className="mb-16 text-center">
        <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
          {t('agenda2026.title')}
        </Badge>
        <div>
          <a href="#agenda" className="group inline-flex items-center justify-center gap-2 mb-4 transition-all hover:opacity-80">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Agenda <span className="text-primary">FlutterConf 2026</span>
            </h2>
            <LinkIcon className="w-6 h-6 md:w-8 md:h-8 opacity-0 group-hover:opacity-50 transition-opacity text-foreground" />
          </a>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          {t('agenda2026.subtitle')}
        </p>
      </div>

      <Tabs defaultValue="morning" className="w-full max-w-4xl mx-auto">
        <TabsList className="flex w-full mb-8 sm:mb-12 h-auto p-1 bg-muted/50 backdrop-blur-sm border border-border/50">
          <TabsTrigger 
            value="morning" 
            className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-[11px] sm:text-sm md:text-base py-3 sm:py-3 data-[state=active]:bg-background data-[state=active]:shadow-md transition-all whitespace-normal sm:whitespace-nowrap h-full min-h-[3.5rem] sm:min-h-[3rem]"
          >
            <span className="font-bold sm:font-medium">{t('agenda2026.tabs.morning')}</span>
            <span className="text-[10px] sm:text-sm opacity-70 sm:opacity-100">(09:00 - 13:30)</span>
          </TabsTrigger>
          <TabsTrigger 
            value="afternoon" 
            className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-[11px] sm:text-sm md:text-base py-3 sm:py-3 data-[state=active]:bg-background data-[state=active]:shadow-md transition-all whitespace-normal sm:whitespace-nowrap h-full min-h-[3.5rem] sm:min-h-[3rem]"
          >
            <span className="font-bold sm:font-medium">{t('agenda2026.tabs.afternoon')}</span>
            <span className="text-[10px] sm:text-sm opacity-70 sm:opacity-100">(15:00 - 20:30)</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="morning" className="space-y-6 focus-visible:ring-0">
          <TrackTimeline sessions={morningSessions} />
        </TabsContent>

        <TabsContent value="afternoon" className="space-y-6 focus-visible:ring-0">
          <TrackTimeline sessions={afternoonSessions} />
        </TabsContent>
      </Tabs>
    </section>
  );
};

const TrackTimeline = ({ sessions }: { sessions: Session[] }) => {
  const { t } = useTranslation('common');

  return (
    <div className="relative space-y-6 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
      {sessions.map((session, index) => (
        <div
          key={index}
          className={cn(
            "relative flex items-center gap-4 md:gap-0 md:justify-normal md:odd:flex-row-reverse group animate-in fade-in slide-in-from-bottom-4 duration-500",
            index === 0 ? "" : "mt-8"
          )}
          style={{ animationDelay: `${index * 50}ms` }}
        >
          {/* Dot */}
          <div className="flex shrink-0 items-center justify-center w-10 h-10 rounded-full border border-background bg-muted shadow md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300 z-10">
            {session.type === "break" ? (
              <Coffee className="w-5 h-5 text-muted-foreground" />
            ) : session.type === "event" ? (
              <PartyPopper className="w-5 h-5 text-accent" />
            ) : (
              <Presentation className="w-5 h-5 text-primary" />
            )}
          </div>

          {/* Card */}
          <Card className={cn(
            "flex-1 min-w-0 md:w-[calc(50%-2.5rem)] md:flex-none bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md",
            session.speaker ? "border-l-4 border-l-primary" : ""
          )}>
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <div className="flex items-center gap-1.5 text-primary font-bold text-sm">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span className="truncate">{session.time}</span>
                </div>
                {session.type === 'session' && (
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-none shrink-0">
                    {t('agenda2026.badges.sessionTalk')}
                  </Badge>
                )}
                {session.type === "break" && (
                  <Badge variant="outline" className="text-muted-foreground font-normal shrink-0">
                    {t('agenda2026.badges.break')}
                  </Badge>
                )}
                {session.type === "event" && (
                  <Badge variant="outline" className="text-accent/80 border-accent/30 font-normal shrink-0">
                    {t('agenda2026.badges.event')}
                  </Badge>
                )}
              </div>

              <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors text-wrap break-words">
                {session.title}
                {session.language && (
                  <span className="ml-2 text-base md:text-lg opacity-80 inline-block align-baseline" title={session.language === 'es' ? 'Spanish' : 'English'}>
                    {session.language === 'es' ? '🇪🇸' : '🇬🇧'}
                  </span>
                )}
              </h3>

              {session.speaker && (
                <div className="mt-4 pt-4 border-t border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 h-10 w-10 md:h-12 md:w-12 shrink-0 rounded-full bg-muted flex items-center justify-center overflow-hidden border border-border/50">
                      {session.imageUrl ? (
                        <img 
                          src={session.imageUrl} 
                          alt={session.speaker} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <User className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1 pt-0.5">
                      <div className="font-bold text-sm truncate">{session.speaker}</div>
                      {session.role && (
                        <div className="text-xs text-muted-foreground mb-2 break-words">{session.role}</div>
                      )}
                      {session.descriptionKey && (
                        <p className="text-sm text-muted-foreground leading-relaxed mt-1 italic break-words">
                          "{t(session.descriptionKey)}"
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Agenda;
