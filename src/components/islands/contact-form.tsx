import { valibotResolver } from '@hookform/resolvers/valibot';
import { actions } from 'astro:actions';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

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

import { CONTACT_SCHEMA, type ContactRequest } from '~/schemas/contact.schema';
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
  placeholders: { subject: string };
  messages: { success: string; error: string };
}

export function ContactForm({ labels }: { labels: Labels }) {
  const [submitting, setSubmitting] = useState(false);
  const form = useForm<ContactRequest>({
    resolver: valibotResolver(CONTACT_SCHEMA),
    defaultValues: { name: '', email: '', message: '', subject: '' },
  });

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
        className="flex flex-col gap-y-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="grid gap-x-5 gap-y-6 md:grid-cols-2">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex flex-col items-start justify-start gap-y-2.5">
                <FormLabel>{labels.fields.name}</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Alfred Mouelle"
                    {...field}
                    className={cn({
                      'border-destructive': !!form.formState.errors.name,
                    })}
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
              <FormItem className="flex flex-col items-start justify-start gap-y-2.5">
                <FormLabel>{labels.fields.email}</FormLabel>
                <FormControl>
                  <Input
                    placeholder="alfredmouelle@gmail.com"
                    {...field}
                    className={cn({
                      'border-destructive': !!form.formState.errors.email,
                    })}
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
            <FormItem className="flex flex-col items-start justify-start gap-y-2.5">
              <FormLabel>{labels.fields.subject}</FormLabel>
              <FormControl>
                <Input
                  placeholder={labels.placeholders.subject}
                  {...field}
                  className={cn({
                    'border-destructive': !!form.formState.errors.subject,
                  })}
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
            <FormItem className="flex flex-col items-start justify-start gap-y-2.5">
              <FormLabel>{labels.fields.message}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Message"
                  rows={6}
                  {...field}
                  className={cn({
                    'border-destructive': !!form.formState.errors.message,
                  })}
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

        <Button
          type="submit"
          isLoading={submitting}
          className="self-stretch md:self-end"
        >
          {labels.fields.submit}
        </Button>
      </form>
    </Form>
  );
}
