import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function InfoCard({ title, summary, items, tags, accent = false, className = '' }) {
  return (
    <Card className={`${accent ? 'border-emerald-200 bg-gradient-to-b from-white to-emerald-50/80' : ''} ${className}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {summary && <CardDescription>{summary}</CardDescription>}
      </CardHeader>
      {(items || tags) && (
        <CardContent>
          {items && (
            <ul className="flex flex-wrap gap-2">
              {items.map((item) => (
                <li key={item}>
                  <Badge>{item}</Badge>
                </li>
              ))}
            </ul>
          )}
          {tags && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant={accent ? 'trust' : 'default'}>
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
}
