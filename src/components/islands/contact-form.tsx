import { actions } from 'astro:actions';
import { useState } from 'react';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { CONTACT_SCHEMA, type ContactRequest } from '~/schemas/contact.schema';

import { Button } from '~/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';

import { cn } from '~/lib/utils';

interface Labels {
  fields: {
    name: string;
    email: string;
    subject: string;
    message: string;
    submit: string;
  };
  errors: { name: string; email: string; subject: string; message: string };
  placeholders: { subject: string; message?: string };
  note?: string;
  messages: { success: string; error: string };
}

interface ContactFormProps {
  labels: Labels;
  variant?: 'default' | 'craft';
}

export function ContactForm({ labels, variant = 'default' }: ContactFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const form = useForm<ContactRequest>({
    resolver: valibotResolver(CONTACT_SCHEMA),
    defaultValues: { name: '', email: '', message: '', subject: '' },
  });

  const isCraft = variant === 'craft';

  const onSubmit = async (values: ContactRequest) => {
    setSubmitting(true);
    const fd = new FormData();
    fd.set('name', values.name);
    fd.set('email', values.email);
    fd.set('subject', values.subject);
    fd.set('message', values.message);

    try {
      const { error } = await actions.contact(fd);
      if (error) {
        toast.error(labels.messages.error);
        return;
      }
      form.reset();
      toast.success(labels.messages.success);
    } catch (err) {
      console.error(err);
      toast.error(labels.messages.error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form
        id="contact-form"
        className={cn('flex flex-col', isCraft ? 'gap-y-5' : 'gap-y-6')}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="grid gap-x-4 gap-y-4 md:grid-cols-2">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex flex-col items-start justify-start gap-y-1.5">
                <FormLabel className="text-xs font-medium text-foreground">
                  {labels.fields.name}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Alfred Mouelle"
                    {...field}
                    className={cn(
                      'rounded border-border/70 bg-card/50 text-xs sm:text-sm transition placeholder:text-muted-foreground/50 focus:border-primary focus:bg-background',
                      {
                        'border-destructive': !!form.formState.errors.name,
                      }
                    )}
                  />
                </FormControl>
                {form.formState.errors.name && (
                  <p className="text-[0.8rem] font-medium text-destructive">
                    {labels.errors.name}
                  </p>
                )}
              </FormItem>
            )}
          />

          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex flex-col items-start justify-start gap-y-1.5">
                <FormLabel className="text-xs font-medium text-foreground">
                  {labels.fields.email}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="alfredmouelle@gmail.com"
                    {...field}
                    className={cn(
                      'rounded border-border/70 bg-card/50 text-xs sm:text-sm transition placeholder:text-muted-foreground/50 focus:border-primary focus:bg-background',
                      {
                        'border-destructive': !!form.formState.errors.email,
                      }
                    )}
                  />
                </FormControl>
                {form.formState.errors.email && (
                  <p className="text-[0.8rem] font-medium text-destructive">
                    {labels.errors.email}
                  </p>
                )}
              </FormItem>
            )}
          />
        </div>

        <FormField
          name="subject"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex flex-col items-start justify-start gap-y-1.5">
              <FormLabel className="text-xs font-medium text-foreground">
                {labels.fields.subject}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={labels.placeholders.subject}
                  {...field}
                  className={cn(
                    'rounded border-border/70 bg-card/50 text-xs sm:text-sm transition placeholder:text-muted-foreground/50 focus:border-primary focus:bg-background',
                    {
                      'border-destructive': !!form.formState.errors.subject,
                    }
                  )}
                />
              </FormControl>
              {form.formState.errors.subject && (
                <p className="text-[0.8rem] font-medium text-destructive">
                  {labels.errors.subject}
                </p>
              )}
            </FormItem>
          )}
        />

        <FormField
          name="message"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex flex-col items-start justify-start gap-y-1.5">
              <FormLabel className="text-xs font-medium text-foreground">
                {labels.fields.message}
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder={labels.placeholders.message || '...'}
                  rows={4}
                  {...field}
                  className={cn(
                    'rounded border-border/70 bg-card/50 text-xs sm:text-sm transition placeholder:text-muted-foreground/50 focus:border-primary focus:bg-background',
                    {
                      'border-destructive': !!form.formState.errors.message,
                    }
                  )}
                />
              </FormControl>
              {form.formState.errors.message && (
                <p className="text-[0.8rem] font-medium text-destructive">
                  {labels.errors.message}
                </p>
              )}
            </FormItem>
          )}
        />

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
          {labels.note ? (
            <p className="font-mono text-xs text-muted-foreground">
              {labels.note}
            </p>
          ) : (
            <span />
          )}
          <Button
            type="submit"
            isLoading={submitting}
            className="rounded border border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary active:scale-[0.98] font-mono text-xs font-semibold px-5 py-2.5 shadow-xs transition-all self-end sm:self-auto cursor-pointer"
          >
            {labels.fields.submit}
          </Button>
        </div>
      </form>
    </Form>
  );
}
